import { Fragment } from "react";
import CartProduct from "../../components/Cart/CartProduct";
import CartInfo from "../../components/Cart/CartInfo";
import useGlobalStore from "../../hooks/useGlobalStore";

// icons
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

export default function CartPage() {
  const { shoppingCartProducts } = useGlobalStore();
  return (
    <Fragment key={"Cart Information"}>
      <h1 className="text-center font-semibold text-3xl text-gray-800 my-10 selection:bg-gray-700 selection:text-white ">
        My Shopping Cart
      </h1>

      {/* Define Table */}
      <table className="ring-2 ring-gray-300 rounded-2xl w-full my-8 selection:bg-gray-700 selection:text-white">
        {/* Create Table Heading */}
        <thead className="text-center text-gray-400 border-b-2 border-gray-300">
          {/* Create First Row */}
          <tr className="text-2xl font-medium">
            {/* Split Table To Six Table Data Element */}
            <td className="py-8" colSpan={2}>
              Description
            </td>
            <td></td>
            <td className="py-8">Size</td>
            <td className="py-8">Quantity</td>
            <td className="py-8">Remove</td>
            <td className="py-8">Price</td>
          </tr>
        </thead>
        {/* Create Table Body */}
        <tbody className="divide-y">
          {shoppingCartProducts.length > 0 ? (
            shoppingCartProducts.map((product, index) => (
              <CartProduct product={product} key={index} />
            ))
          ) : (
            <tr className="py-8">
              <td className="text-2xl py-8 text-center font-medium" colSpan={6}>
                No products in cart
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Cart info */}
      <CartInfo />

      <div className="flex items-center justify-end gap-6 mb-16 mt-8 select-none">
        <button className="flex items-center text-xl justify-center px-8 py-4 gap-4 text-gray-800 rounded-md ring-1 ring-gray-300">
          <MdOutlineNavigateBefore className="text-2xl" />
          Continue Shopping
        </button>
        <button className="flex items-center text-xl justify-center px-8 py-4 gap-4 text-white bg-brand rounded-md">
          Make Purchase
          <MdOutlineNavigateNext className="text-2xl" />
        </button>
      </div>
    </Fragment>
  );
}
