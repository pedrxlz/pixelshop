import Image from "next/image.js";

export const CartLine = ({ product, onRemove }) => {
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          height={96}
          width={96}
          src={product.image}
          alt={product.image}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <p>{product.name}</p>
            </h3>
            <p className="ml-4">R$ {product.price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500"></p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => onRemove(product)}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
