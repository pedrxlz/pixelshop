"use client";
import { ProductCard } from "@/components/ProductCard/index.jsx";
import { useCallback, useContext } from "react";
import { CartContext } from "./layout.js";
import { useProducts } from "@/hooks/swr/useProducts.js";

export default function Home() {
  const { dispatch } = useContext(CartContext);

  const { products } = useProducts();

  const handleCart = useCallback(
    ({ product, type }) => {
      dispatch({ type, product });
    },
    [dispatch]
  );

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products?.map((product) => (
          <ProductCard
            key={product?.id}
            product={product}
            handleClick={handleCart}
          />
        ))}
      </div>
    </div>
  );
}
