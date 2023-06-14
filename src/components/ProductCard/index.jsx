import Image from "next/image.js";
import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useCallback, useContext } from "react";
import { CartContext } from "@/app/layout.js";

export const ProductCard = ({ product, handleClick }) => {
  const handleAddToCart = useCallback(
    ({ product, type }) => {
      handleClick({ product, type });
    },
    [handleClick]
  );

  const { state } = useContext(CartContext);
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
        <Image
          width={1920}
          height={1080}
          src={product.image}
          alt={product.image}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="group">
        {state.products.some((item) => item._id === product._id) ? (
          <CheckCircleIcon
            className="h-7 w-7 flex-shrink-0 text-white absolute top-1 right-1 cursor-pointer z-10"
            aria-hidden="true"
            onClick={() => handleAddToCart({ product, type: "REMOVE_PRODUCT" })}
          />
        ) : (
          <PlusCircleIcon
            className="h-7 w-7 flex-shrink-0 text-gray-300 absolute top-1 right-1 cursor-pointer z-10 hidden group-hover:block"
            aria-hidden="true"
            onClick={() => handleAddToCart({ product, type: "ADD_PRODUCT" })}
          />
        )}
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 text-ellipsis overflow-hidden whitespace-nowrap sm:w-40">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">R$ {product.price}</p>
      </div>
    </div>
  );
};
