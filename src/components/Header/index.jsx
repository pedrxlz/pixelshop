import { CartContext } from "@/app/layout.js";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <h1 className="font-bold tracking-tight text-gray-900">
                  Pixel shop
                </h1>
              </a>
            </div>
            <div className="ml-auto flex items-center">
              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>

              <div
                className="ml-4 flow-root lg:ml-6 cursor-pointer"
                onClick={() => {
                  dispatch("TOGGLE_CART", { isCartOpen: !state.isCartOpen });
                }}
              >
                <div className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
