import { Fragment, useCallback, useContext, useMemo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CartContext } from "@/app/layout.js";
import { CartLine } from "../CartLine/index.jsx";
import { toast } from "react-toastify";
import { makeOrder } from "../../../services/products/index.js";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const [email, setEmail] = useState("");

  const subtotal = useMemo(() => {
    return state.products?.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }, [state.products]);

  const removeProduct = useCallback(
    (product) => {
      dispatch({ type: "REMOVE_PRODUCT", product });
    },
    [dispatch]
  );

  const closeCart = (bool) => {
    dispatch({ type: "CLOSE_CART", isCartOpen: bool });
  };

  const sendOrder = async () => {
    toast.promise(makeOrder({ email, products: state?.products }), {
      pending: {
        render() {
          return "Processando...";
        },
        icon: true,
      },
      success: {
        render({ data }) {
          return data?.message;
        },
      },
      error: {
        render({ data }) {
          return data?.response?.data?.error;
        },
      },
    });
  };

  return (
    <Transition.Root show={state.isCartOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => closeCart(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Carrinho de compras
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {state.products?.map((product) => (
                              <CartLine
                                key={product?._id}
                                product={product}
                                onRemove={removeProduct}
                              />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="text-base font-medium text-gray-900">
                        <p>Email</p>
                        <div class="relative mt-2 rounded-md shadow-sm">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            class="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-900 mt-4">
                        <p>Subtotal</p>
                        <p>R$ {subtotal.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500"></p>
                      <div className="mt-6">
                        <button
                          onClick={sendOrder}
                          className="flex items-center justify-center rounded-md border border-transparent w-full bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Fazer pedido
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
