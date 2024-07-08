"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

import { ICartContextProps } from "../../interfaces/ICartContextProps";
import IOrder from "../../interfaces/IOrder";

interface CartProviderProps {
  children: React.ReactElement;
}

const CartContext = createContext<ICartContextProps>({
  cart: [],
  setCart: () => {},
  total: 0,
  setTotal: () => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<IOrder[]>([]);
  const [total, setTotal] = useState<number>(0);


  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
  
    if (Array.isArray(storedCart) && storedCart.length > 0) {
      let totalCart = 0;
      storedCart.forEach((item: IOrder) => {
        if (item.products && item.products.length > 0) {
          totalCart += item.products[0].price;
        }
      });
  
      setCart(storedCart);
      setTotal(totalCart);

      setCart(storedCart);
      setTotal(totalCart);
    }
  }, []);

  useEffect(() => {
  
    let totalCart = 0;
    cart.forEach((item: IOrder) => {
      if (item.products && item.products.length > 0) {
        totalCart += item.products[0].price;
      }
    });
 
    setTotal(totalCart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, total, setCart, setTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
