import numberFormatter from "../../helpers/numberFormatter";
import useGlobalStore from "../../hooks/useGlobalStore";

export default function CartInfo() {
  const { totalCartPrice } = useGlobalStore();
  const discount = 5000;
  const deliveryTax = 5000;
  const subTotalPrice = totalCartPrice + 10000;

  return (
    <div className="grid gap-8 2xl:gap-12 grid-cols-4 selection:bg-gray-700 selection:text-white">
      <div className="flex items-center justify-center gap-16 py-4 px-6 2xl:py-8 2xl:px-10 rounded-lg ring-1 ring-gray-300">
        <span className="text-gray-600 text-xl font-medium">Discount</span>
        <span className="text-gray-800 text-lg font-semibold">
          {numberFormatter(discount)} SYP
        </span>
      </div>
      <div className="flex items-center justify-center gap-16 py-4 px-6 2xl:py-8 2xl:px-10 rounded-lg ring-1 ring-gray-300">
        <span className="text-gray-600 text-xl font-medium">Delivery</span>
        <span className="text-gray-800 text-lg font-semibold">
          {numberFormatter(deliveryTax)} SYP
        </span>
      </div>
      <div className="flex items-center justify-center gap-16 py-4 px-6 2xl:py-8 2xl:px-10 rounded-lg ring-1 ring-gray-300">
        <span className="text-gray-600 text-xl font-medium">Subtotal</span>
        <span className="text-gray-800 text-lg font-semibold">
          {numberFormatter(subTotalPrice)} SYP
        </span>
      </div>
      <div className="flex items-center justify-center gap-16 py-4 px-8 rounded-lg ring-1 ring-gray-300">
        <span className="text-gray-600 text-xl font-medium">Total</span>
        <span className="text-gray-800 text-lg font-semibold">
          {numberFormatter(totalCartPrice)} SYP
        </span>
      </div>
    </div>
  );
}
