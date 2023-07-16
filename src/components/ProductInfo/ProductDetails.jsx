import { BsCartPlus } from "react-icons/bs";
import numberFormatter from "../../helpers/numberFormatter";
import useGlobalStore from "../../hooks/useGlobalStore";
import { useState } from "react";
// components
import ProductQuantityController from "../shared/ProductQuantityController";
// icons
import { AiOutlineHeart } from "react-icons/ai";

export default function ProductDetails({ product }) {
  const { addProductToCart, addProductToWishlist } = useGlobalStore();

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="pt-8 pb-20 selection:bg-gray-600 selection:text-gray-200">
      {/* Product Name */}
      <h1 className="text-gray-800 font-medium text-2xl mb-6 ">
        {product.name}
      </h1>
      {/* Description */}
      <p className="text-gray-500 mb-3 ">{product.description}</p>
      <div className="flex items-center gap-7 mb-10">
        {/* Price Before & After */}
        <span className="font-medium text-2xl text-brand selection:bg-brand selection:text-white">
          {numberFormatter(product.price)} SYP
        </span>
        <del className="font-medium text-lg text-gray-600">160,000 SYP</del>
      </div>

      {/* Sizes */}
      <h1 className="text-gray-800 font-medium text-2xl mb-6">Sizes</h1>
      <div className="w-3/4 grid grid-cols-5 gap-5 mb-10">
        {product.sizes.map((size) => (
          <span
            key={size}
            className="flex items-center justify-center py-2 px-5 text-gray-800 ring-1 ring-gray-300 rounded-md "
          >
            {size}
          </span>
        ))}
      </div>

      {/* Quantity */}
      <h1 className="text-gray-800 font-medium text-2xl mb-6">Quantity</h1>
      <ProductQuantityController
        className="mb-14"
        initialValue={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      {/* Add to cart || wishlist */}

      <div className="flex items-center justify-between">
        {/* Add To Cart Button */}
        <button
          onClick={() => addProductToCart(product, quantity)}
          className="flex items-center px-10 py-4 justify-center gap-8 whitespace-nowrap text-white rounded-md bg-brand font-medium text-lg"
        >
          Add To Bag <BsCartPlus className="text-2xl" />
        </button>
        {/* Add To Wishlist Button */}
        <button
          onClick={() => addProductToWishlist(product)}
          className="flex items-center px-10 py-4 justify-center gap-8 whitespace-nowrap text-brand rounded-md ring-1 ring-brand font-medium text-lg"
        >
          Add To Wishlist <AiOutlineHeart className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
