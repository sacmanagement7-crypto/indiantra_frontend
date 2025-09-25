import { createContext, useEffect, useState } from "react";
import { Products, Categories } from "./DummyData";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState(() => {
    // get cart from localStorage (persist cart)
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });



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

  // persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    async function fetchData() {

      setCategories(Categories);
      setProducts(Products);
    }

    fetchData();
  }, []);

  return (
    <ShopContext.Provider value={{
      categories, 
      products, 
      cart,
      addToCart,
      removeFromCart,
      deleteFromCart,
      clearCart
    }}>
      {children}
    </ShopContext.Provider>
  );
}