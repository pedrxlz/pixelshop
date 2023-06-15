"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components/Header/index.jsx";
import { createContext, useReducer } from "react";
import Cart from "@/components/Cart/index.jsx";
import { ToastContainer } from "react-toastify";
import { cart } from "@/reducers/cart.js";
const inter = Inter({ subsets: ["latin"] });

export const CartContext = createContext();

export default function RootLayout({ children }) {
  const [state, dispatch] = useReducer(cart, {
    isCartOpen: false,
    products: [],
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContext.Provider value={{ state, dispatch }}>
          <div className="bg-white">
            <button onClick={() => dispatch()} />
            <Header />
            {children}
            <Cart />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              draggable
              theme={"light"}
            />
          </div>
        </CartContext.Provider>
      </body>
    </html>
  );
}
