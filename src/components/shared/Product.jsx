import { BsFillStarFill } from "react-icons/bs";

import numberFormatter from "../../helpers/numberFormatter";
import { Link } from "react-router-dom";
import { IMAGES } from "../../helpers/constants";
import Image from "./Image";

export default function Product({ product }) {
  const imageIndex = Math.floor(Math.random() * (IMAGES.length - 1));

  if (product == null) return null;
  return (
    <div className="col-span-1 flex flex-col gap-0.5">
      <Link to={`/${product.id}`} className="min-h-[280px]">
        <Image
          src={IMAGES[imageIndex]}
          alt={product.name}
          loading="lazy"
          className="rounded-md object-cover max-w-full object-center h-full"
        />
      </Link>

      {/* Product title */}
      <h2 className="text-lg text-gray-800 pl-1 font-medium">{product.name}</h2>
      {/* Short discription */}
      <p className="text-ellipsis text-gray-600 whitespace-nowrap overflow-hidden pl-1">
        {product.description}
      </p>
      {/* Rating */}
      <div className="flex items-center gap-4 font-medium">
        {product.rate}
        <BsFillStarFill className="text-yellow-500" />
      </div>

      <div className="flex items-baseline gap-4">
        <h3 className="text-xl font-medium text-brand">
          {numberFormatter(product.price)} SYP
        </h3>

        <del className="text-lg font-medium text-gray-500">
          {numberFormatter(product.price + 2000)}SYP
        </del>
      </div>
    </div>
  );
}
