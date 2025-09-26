import { createContext, useEffect, useState } from "react";
import { Products, Categories } from "./DummyData";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // 🛒 Cart State (with persistence)
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // 💖 Wishlist State (with persistence)
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  /* ===========================
     CART FUNCTIONS
  =========================== */

  // Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove one quantity
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Delete item completely
  const deleteFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => setCart([]);

  /* ===========================
     WISHLIST FUNCTIONS
  =========================== */

  // Add to wishlist
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev; // already in wishlist
      return [...prev, product];
    });
  };

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear wishlist
  const clearWishlist = () => setWishlist([]);

  /* ===========================
     LOCAL STORAGE PERSISTENCE
  =========================== */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  /* ===========================
     FETCH DATA
  =========================== */
  useEffect(() => {
    async function fetchData() {
      setCategories(Categories);
      setProducts(Products);
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
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
