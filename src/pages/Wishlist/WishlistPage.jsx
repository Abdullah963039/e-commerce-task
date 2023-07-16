import { Fragment } from "react";
import FavoriteProduct from "../../components/Wishlist/FavoriteProduct";
import { Link } from "react-router-dom";
import useGlobalStore from "../../hooks/useGlobalStore";

export default function WishlistPage() {
  const { wishlistProducts } = useGlobalStore();

  return (
    <Fragment key={"Wishlist Page"}>
      <h1 className="text-center font-semibold text-3xl text-gray-800 my-10 selection:bg-gray-700 selection:text-white ">
        My Wishlist
      </h1>

      <div className="grid grid-cols-5 gap-6">
        {wishlistProducts.length > 0 ? (
          wishlistProducts.map((favProd, index) => (
            <FavoriteProduct key={index} product={favProd} />
          ))
        ) : (
          <div className="flex flex-col gap-6 items-centerpy-12 col-span-full">
            <h1 className="text-center text-4xl font-medium">
              There are no favorite products yet
            </h1>
            <div className="text-center text-2xl">
              Click here on{" "}
              <Link
                to="/"
                className="underline duration-100 hover:text-brand hover:decoration-brand"
              >
                this link
              </Link>{" "}
              and add what you like
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
