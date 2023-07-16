import { useState } from "react";
import numberFormatter from "../../helpers/numberFormatter";
import useGlobalStore from "../../hooks/useGlobalStore";
import ProductQuantityController from "../shared/ProductQuantityController";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "../shared/Image";

export default function CartProduct({ product }) {
  const [productQuantity, setProductQuantity] = useState(product.quantity);

  const { removeProductFromCart, updateCartProductQuantity } = useGlobalStore();

  function handleIncrease() {
    setProductQuantity((prev) => {
      updateCartProductQuantity(product.id, prev + 1);
      return prev + 1;
    });
  }
  function handleDecrease() {
    if (productQuantity <= 1) return;

    setProductQuantity((prev) => {
      updateCartProductQuantity(product.id, prev - 1);
      return prev - 1;
    });
  }

  return (
    <tr>
      <td className="py-8" colSpan={2}>
        <div className="flex items-center gap-8 max-w-md mx-auto">
          {/* Product Image */}
          <Image
            src={product.images[0]}
            alt={product.name}
            className="w-32 aspect-square object-contain"
          />

          <div className="text-start">
            <h3 className="text-2xl font-medium">{product.name}</h3>
            <p className="text-xl text-gray-500">{product.description}</p>
          </div>
        </div>
      </td>
      <td></td>
      <td className="py-8">
        <span className="py-4 px-3 rounded-md ring-1 ring-gray-300 text-brand text-2xl flex items-center justify-center mx-auto">
          S
        </span>
      </td>
      <td className="py-8">
        <ProductQuantityController
          className="mx-auto flex justify-center"
          initialValue={productQuantity}
          onIncrement={handleIncrease}
          onDecrement={handleDecrease}
        />
      </td>
      <td className="py-8">
        <div
          className="flex items-center justify-center"
          title="Remove From Cart"
        >
          <button
            onClick={() => removeProductFromCart(product.id)}
            className="text-2xl font-bold text-red-600 p-6 rounded-md ring-1 ring-gray-400 "
          >
            <LiaTimesSolid />
          </button>
        </div>
      </td>
      <td className="py-8 text-center text-gray-800 font-medium text-2xl">
        {numberFormatter(product.price * product.quantity)} SYP
      </td>
    </tr>
  );
}
