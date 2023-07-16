import { twMerge } from "tailwind-merge";

export default function ProductQuantityController({
  className = "",
  initialValue,
  onIncrement,
  onDecrement,
  ...props
}) {
  return (
    <div {...props} className={twMerge("flex select-none", className)}>
      <button
        className="flex items-center justify-center px-6 py-4 bg-brand-dark text-2xl text-white"
        onClick={onIncrement}
      >
        +
      </button>
      <span className="flex items-center justify-center px-6 py-4 border text-2xl">
        {initialValue ?? 1}
      </span>
      <button
        className="flex items-center justify-center px-6 py-4 bg-smoothGray-light text-2xl border text-gray-600"
        onClick={onDecrement}
      >
        -
      </button>
    </div>
  );
}
