import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  // ===========================
  // CART FUNCTIONS
  // ===========================
  const addToCart = async (product) => {
    const exists = cart.find((item) => item._id === product._id);
    const updatedCart = exists
      ? cart.map((item) =>
        item._id === product._id ? { ...item, qty: item.qty + 1 } : item
      )
      : [...cart, { ...product, qty: 1 }];

    const prevCart = cart;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    try {
      await api.post("/cart/add", { productId: product._id, quantity: 1 });
    } catch (error) {
      setCart(prevCart);
      localStorage.setItem("cart", JSON.stringify(prevCart));
      console.error("Failed to add to cart:", error.response?.data || error.message);
    }
  };

  const removeFromCart = async (id) => {
    const item = cart.find((item) => item._id === id);
    if (!item) return;

    const updatedCart = cart
      .map((item) => (item._id === id ? { ...item, qty: item.qty - 1 } : item))
      .filter((item) => item.qty > 0);

    const prevCart = cart;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    try {
      await api.post("/cart/update", { productId: id, quantity: item.qty - 1 });
    } catch (error) {
      setCart(prevCart);
      localStorage.setItem("cart", JSON.stringify(prevCart));
      console.error("Failed to update cart:", error.response?.data || error.message);
    }
  };

  const deleteFromCart = async (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    const prevCart = cart;

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    try {
      await api.post("/cart/remove", { productId: id });
    } catch (error) {
      setCart(prevCart);
      localStorage.setItem("cart", JSON.stringify(prevCart));
      console.error("Failed to delete from cart:", error.response?.data || error.message);
    }
  };

  const clearCart = async () => {
    const prevCart = cart;
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));

    try {
      await api.post("/cart/clear");
    } catch (error) {
      setCart(prevCart);
      localStorage.setItem("cart", JSON.stringify(prevCart));
      console.error("Failed to clear cart:", error.response?.data || error.message);
    }
  };

  // ===========================
  // WISHLIST FUNCTIONS (optimistic updates)
  // ===========================
  const addToWishlist = async (product) => {
    if (wishlist.find((item) => item._id === product._id)) return;

    const updatedWishlist = [...wishlist, product];
    const prevWishlist = wishlist;

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    try {
      await api.post("/wishlist/add", { productId: product._id });
    } catch (error) {
      setWishlist(prevWishlist);
      localStorage.setItem("wishlist", JSON.stringify(prevWishlist));
      console.error("Failed to add to wishlist:", error.response?.data || error.message);
    }
  };

  const removeFromWishlist = async (id) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);
    const prevWishlist = wishlist;

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    try {
      await api.post("/wishlist/remove", { productId: id });
    } catch (error) {
      setWishlist(prevWishlist);
      localStorage.setItem("wishlist", JSON.stringify(prevWishlist));
      console.error("Failed to remove from wishlist:", error.response?.data || error.message);
    }
  };

  const clearWishlist = async () => {
    const prevWishlist = wishlist;
    setWishlist([]);
    localStorage.setItem("wishlist", JSON.stringify([]));

    try {
      await api.post("/wishlist/clear");
    } catch (error) {
      setWishlist(prevWishlist);
      localStorage.setItem("wishlist", JSON.stringify(prevWishlist));
      console.error("Failed to clear wishlist:", error.response?.data || error.message);
    }
  };

  // ===========================
  // LOCAL STORAGE PERSISTENCE
  // ===========================
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ===========================
  // FETCH DATA
  // ===========================
  useEffect(() => {
    async function fetchData() {
      try {
        const catRes = await api.get("/categories");
        const productRes = await api.get("/products");

        setCategories(catRes.data.categories);
        setProducts(productRes.data.products);
      } catch (error) {
        console.error("Failed to fetch data:", error.message);
      }
    }
    fetchData();
  }, []);

  const checkoutCart = async (paymentMethod = "COD") => {
    if (cart.length === 0) return alert('cart is empty');
    const prevCart = [...cart];
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));

    try {
      const res = await api.post("/order/checkout", { paymentMethod });
      if (res.status === 200 && res.data.order) {
        alert("Order placed successfully!");
      } else {
        alert("Checkout failed, please try again");
      }
    } catch (error) {
      setCart(prevCart);
      localStorage.setItem("cart", JSON.stringify(prevCart));
      console.error("Checkout failed:", error.response?.data || error.message);
      alert("Checkout failed, please try again");
    }
  }

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
        checkoutCart
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
