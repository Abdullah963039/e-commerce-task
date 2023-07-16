import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import useGlobalStore from "./hooks/useGlobalStore";

// components
import Navbar from "./components/shared/Navbar";

import { ToastContainer } from "react-toastify";
import "./output.css";
import "react-toastify/dist/ReactToastify.css"; // Notifications styles

function App() {
  const { getAllProducts } = useGlobalStore();

  useEffect(() => {
    async function getProducts() {
      return await getAllProducts();
    }

    getProducts(); // Runs in first render
  }, []);

  return (
    <Fragment key={"App"}>
      <Navbar />
      <main className="container min-h-[calc(100vh_-_208px)]">
        <Outlet />
      </main>
      <footer className="bg-smoothGray py-4 text-center text-gray-700 duration-75 hover:text-brand">
        © 2023 | All Rights Reserved | Ocean Soft
      </footer>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Fragment>
  );
}

export default App;
