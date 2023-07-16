import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App"));
const AllProductsPage = lazy(() =>
  import("./pages/AllProducts/AllProductsPage")
);
const ProductDetailsPage = lazy(() =>
  import("./pages/ProductInfo/ProductDetailsPage")
);
const CartPage = lazy(() => import("./pages/Cart/CartPage"));
const WishlistPage = lazy(() => import("./pages/Wishlist/WishlistPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={"Loading ..."}>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={"Loading ..."}>
            <AllProductsPage />
          </Suspense>
        ),
      },
      {
        path: ":productId",
        element: (
          <Suspense fallback={"Loading ..."}>
            <ProductDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={"Loading ..."}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={"Loading ..."}>
            <WishlistPage />
          </Suspense>
        ),
      },
    ],
  },
  ,
];

export const router = createBrowserRouter(routes);
