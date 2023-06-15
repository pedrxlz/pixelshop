import Image from "next/image.js";
import { CheckIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useCallback, useContext } from "react";
import { CartContext } from "@/app/layout.js";

export const ProductCard = ({ product, handleClick }) => {
  const handleCart = useCallback(
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
          <CheckIcon
            className="h-6 w-6 flex-shrink-0 text-white absolute top-1 right-1 cursor-pointer z-10 bg-indigo-500 border-2 border-indigo-500 rounded font-bold p-0.5"
            aria-hidden="true"
            onClick={() => handleCart({ product, type: "REMOVE_PRODUCT" })}
          />
        ) : (
          <PlusIcon
            className="h-6 w-6 flex-shrink-0 text-indigo-700 absolute top-1 right-1 cursor-pointer z-10 md:hidden group-hover:block bg-white border-2 border-indigo-500 rounded font-bold p-0.5"
            aria-hidden="true"
            onClick={() => handleCart({ product, type: "ADD_PRODUCT" })}
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
