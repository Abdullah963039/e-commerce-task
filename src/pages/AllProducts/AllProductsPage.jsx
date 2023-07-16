import { Fragment } from "react";
import Fade from "react-reveal/Fade";

// components
import FilterationButtons from "../../components/shared/FilterationButtons";
import Pagination from "../../components/shared/Pagination";
import AllProductsContainer from "../../components/AllProducts/AllProductsContainer";
import useGlobalStore from "../../hooks/useGlobalStore";

export default function AllProductsPage() {
  const { products, pagination, getAllProducts } = useGlobalStore();

  async function handlePagination(page) {
    await getAllProducts(page);
  }

  return (
    <Fragment key={"All Products Page"}>
      <FilterationButtons />
      <Fade bottom>
        <div className="py-8">
          <h1 className="text-gray-700 text-xl font-semibold mb-9 selection:text-white selection:bg-gray-700">
            Men's sports shoes
          </h1>
          <AllProductsContainer products={products} />
          <Pagination
            totalPages={pagination?.totalPages}
            totalItems={pagination?.perPage}
            viewedItems={products.length}
            onClick={handlePagination}
          />
        </div>
      </Fade>
    </Fragment>
  );
}
