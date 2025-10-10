import { createContext, useEffect, useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const notify = (type, message) => {
    toast[type](message, { position: "top-right", autoClose: 2000 });
  };
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ===========================
  // INITIAL LOAD: Fetch Server Cart & Wishlist
  // ===========================
  useEffect(() => {
    const token = localStorage.getItem("token"); // Replace with your auth strategy
    if (!token) return;

    const fetchUserData = async () => {
      try {
        const [cartRes, wishlistRes] = await Promise.all([
          api.get("/cart"),
          api.get("/wishlist"),
        ]);
        console.log("cartRes", cartRes);
        console.log("wishlist", wishlistRes);

        const serverCart = cartRes.data.items || [];
        const serverWishlist = wishlistRes.data.items || [];

        setCart(serverCart);
        setWishlist(serverWishlist);
        localStorage.setItem("cart", JSON.stringify(serverCart));
        localStorage.setItem("wishlist", JSON.stringify(serverWishlist));
      } catch (error) {
        console.error("❌ Failed to fetch cart/wishlist:", error.message);
      }
    };

    fetchUserData();
  }, []);

  // ===========================
  // CART FUNCTIONS
  // ===========================
  const addToCart = async (product) => {
    const exists = cart.find((item) => item.productId._id === product._id);

    const updatedCart = exists
      ? cart.map((item) =>
        item.productId._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      : [...cart, { _id: Date.now().toString(), productId: product, quantity: 1 }];

    const prevCart = cart;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    try {
      await api.post("/cart/add", { productId: product._id, quantity: 1 });
      notify("success", `${product.name} added to cart`);
    } catch (error) {
      setCart(prevCart);
      localStorage.setItem("cart", JSON.stringify(prevCart));
      notify("error", "Failed to add to cart");
      console.error("❌ Failed to add to cart:", error.response?.data || error.message);
    }
  };


  const removeFromCart = async (productId) => {
    const item = cart.find((item) => item.productId._id === productId);
    if (!item) return;

    const updatedCart = cart
      .map((item) =>
        item.productId._id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    const prevCart = cart;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    try {
      await api.post("/cart/update", {
        productId,
        quantity: item.quantity - 1,
      });
      notify("info", `Decreased quantity of ${item.productId.name}`);
    } catch (error) {
      setCart(prevCart);
      localStorage.setItem("cart", JSON.stringify(prevCart));
      notify("error", "Failed to update cart");
      console.error("❌ Failed to update cart:", error.response?.data || error.message);
    }
  };


  const deleteFromCart = async (productId) => {
    const updatedCart = cart.filter((item) => item.productId._id !== productId);
    const prevCart = cart;

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    try {
      await api.post("/cart/remove", { productId });
      notify("info", `Removed item from cart`);

    } catch (error) {
      setCart(prevCart);
      localStorage.setItem("cart", JSON.stringify(prevCart));
      notify("error", "Failed to delete from cart");
      console.error("❌ Failed to delete from cart:", error.response?.data || error.message);
    }
  };


  const clearCart = async () => {
    const prevCart = cart;
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));

    try {
      await api.post("/cart/clear");
      notify("success", "Cart cleared");

    } catch (error) {
      setCart(prevCart);
      localStorage.setItem("cart", JSON.stringify(prevCart));
      notify("error", "Failed to clear cart");
      console.error("❌ Failed to clear cart:", error.response?.data || error.message);
    }
  };

  const checkoutCart = async (addressId, paymentMethod = "COD") => {
    if (cart.length === 0) return notify("warn", "Cart is empty");
    if (!addressId) return notify("warn", "Please select an address");

    const prevCart = [...cart];
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));

    try {
      const res = await api.post("/order/checkout", {
        paymentMethod,
        addressId,
      });


      if (res.status === 200 && res.data.order) {
        notify("success", "✅ Order placed successfully!");
        return res.data.order;
      } else {
        notify("error", "Checkout failed, please try again");
      }
    } catch (error) {
      setCart(prevCart);
      localStorage.setItem("cart", JSON.stringify(prevCart));
      console.error("❌ Checkout failed:", error.response?.data || error.message);
      notify("error", "Checkout failed, please try again");
    }
  };

  // ===========================
  // WISHLIST FUNCTIONS
  // ===========================
  // ✅ Add to Wishlist
  // ✅ Add to Wishlist
  const addToWishlist = async (product) => {
    // Prevent duplicates by checking productId._id
    const exists = wishlist.some(
      (item) => item.productId?._id === product._id
    );
    if (exists) {
      notify("info", `${product.name} is already in wishlist`);
      return;
    }

    // Optimistic update
    const newItem = {
      _id: Date.now().toString(),
      productId: product,
      addedAt: new Date().toISOString(),
    };

    const prevWishlist = wishlist;
    const updatedWishlist = [...wishlist, newItem];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    try {
      const res = await api.post("/wishlist/add", { productId: product._id });
      if (res.data?.success) {
        notify("success", `${product.name} added to wishlist`);
      }
    } catch (error) {
      console.error("❌ Wishlist Add Error:", error);
      setWishlist(prevWishlist);
      localStorage.setItem("wishlist", JSON.stringify(prevWishlist));
      notify("error", "Failed to add to wishlist");
    }
  };

  // ✅ Remove from Wishlist
  const removeFromWishlist = async (wishlistItemId) => {

    const prevWishlist = wishlist;

    // ✅ Remove from UI immediately
    const updatedWishlist = wishlist.filter((item) => item._id !== wishlistItemId);

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // ✅ Remove from backend
    const productId = wishlist.find((item) => item._id === wishlistItemId)?.productId?._id;
    if (!productId) return;

    try {
      const res = await api.post("/wishlist/remove", { productId });
      console.log("✅ Backend remove response:", res.data);
      if (res.data?.success) {
        notify("info", "Removed from wishlist");
      } else {
        notify("warn", "Server did not confirm removal");
      }
    } catch (error) {
      console.error("❌ Wishlist Remove Error:", error.response?.data || error.message);
      // rollback UI if backend fails
      setWishlist(prevWishlist);
      localStorage.setItem("wishlist", JSON.stringify(prevWishlist));
      notify("error", "Failed to remove from wishlist");
    }
  };


  // ✅ Clear Wishlist
  const clearWishlist = async () => {
    const prevWishlist = wishlist;

    setWishlist([]);
    localStorage.setItem("wishlist", JSON.stringify([]));

    try {
      const res = await api.post("/wishlist/clear");
      if (res.data?.success) {
        notify("success", "Wishlist cleared");
      }
    } catch (error) {
      console.error("❌ Wishlist Clear Error:", error);
      setWishlist(prevWishlist);
      localStorage.setItem("wishlist", JSON.stringify(prevWishlist));
      notify("error", "Failed to clear wishlist");
    }
  };

  // ===========================
  // FETCH PRODUCTS & CATEGORIES
  // ===========================
  useEffect(() => {
    async function fetchData() {
      try {
        const catRes = await api.get("/categories");
        const productRes = await api.get("/products");

        setCategories(catRes.data.categories);
        setProducts(productRes.data.products);
      } catch (error) {
        console.error("❌ Failed to fetch data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        categories,
        products,
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        deleteFromCart,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        checkoutCart,
        setWishlist,
        setCart
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
