"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/index.jsx";
import { createContext, useReducer } from "react";
import Cart from "@/components/Cart/index.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const CartContext = createContext();

export default function RootLayout({ children }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "TOGGLE_CART":
          return { ...state, isCartOpen: !state.isCartOpen };
        case "ADD_PRODUCT":
          if (
            state.products.find((product) => product._id === action.product._id)
          )
            return state;

          return {
            ...state,
            products: [...state.products, action.product],
          };
        case "REMOVE_PRODUCT":
          return {
            ...state,
            products: state.products.filter(
              (product) => product._id !== action.product._id
            ),
          };
        default:
          return state;
      }
    },
    {
      isCartOpen: false,
      products: [],
    }
  );

  const handleToggleCart = (bool) => {
    dispatch({ type: "TOGGLE_CART", isCartOpen: bool });
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <CartContext.Provider value={{ state, dispatch }}>
          <div className="bg-white">
            <button onClick={() => dispatch()} />
            <Header isCartOpen={state?.isCartOpen} />
            {children}
            <Cart open={state?.isCartOpen} setOpen={handleToggleCart} />
          </div>
        </CartContext.Provider>
      </body>
    </html>
  );
}
