import Product from "../shared/Product";

export default function AllProductsContainer({ products = [] }) {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
      {/* List Of Prodcuts */}
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}
