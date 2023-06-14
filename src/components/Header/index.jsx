import { CartContext } from "@/app/layout.js";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";

export const Header = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <div className="flex lg:flex-1">
              <h1 className="font-bold tracking-tight text-gray-900 text-lg">
                Pixel shop
              </h1>
            </div>
            <div className="ml-auto flex items-center">
              <div className="flex lg:ml-6">
                <p className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </p>
              </div>

              <div
                className="ml-4 flow-root lg:ml-6 cursor-pointer"
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_CART",
                    isCartOpen: !state.isCartOpen,
                  });
                }}
              >
                <div className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  {state.products.length > 0 && (
                    <div className="text-xs font-medium text-white bg-red-500 rounded-full h-4 w-4 flex justify-center items-center">
                      {state.products.length}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
