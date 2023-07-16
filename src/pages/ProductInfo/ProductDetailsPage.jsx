import { Fragment } from "react";
import { useParams } from "react-router-dom";

// components
import FilterationButtons from "../../components/shared/FilterationButtons";
import ImageGallary from "../../components/ProductInfo/ImageGallary";
import ProductDetails from "../../components/ProductInfo/ProductDetails";
import useGlobalStore from "../../hooks/useGlobalStore";
import { useEffect, useState } from "react";
import { IMAGES } from "../../helpers/constants";

export default function ProductDetailsPage() {
  let images = [];

  for (let i = 0; i < 4; i++) {
    images.push(IMAGES[Math.floor(Math.random() * (IMAGES.length - 1))]);
  }
  const [productDetails, setProductDetails] = useState(null); // Store Product Data

  const { products } = useGlobalStore(); // Get products from global store

  const { productId } = useParams(); // Get product id from url

  useEffect(() => {
    function getDetails() {
      const details = products.find((product) => product.id == productId);

      setProductDetails(details);
    }

    getDetails();

    return () => setProductDetails(null);
  }, [productId]);
  if (productDetails == null) return null;

  return (
    <Fragment key={`Product No_${productId}`}>
      <FilterationButtons />
      <div className="pt-14 pb-10 grid grid-cols-1 2xl:gap-60 lg:grid-cols-2">
        <ImageGallary images={images} />
        <ProductDetails product={productDetails} />
      </div>
    </Fragment>
  );
}
