import { Fragment } from "react";
import { Link } from "react-router-dom";

// icons
import { MdExpandMore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LiaHeart } from "react-icons/lia";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import useGlobalStore from "../../hooks/useGlobalStore";
import Image from "./Image";

export default function Navbar() {
  const { shoppingCartProducts, wishlistProducts } = useGlobalStore();

  return (
    <Fragment key={"Navbar"}>
      <header className="bg-smoothGray py-7 shadow-md">
        {/* Navbar element's wrapper */}
        <div className="flex items-center container justify-between gap-6 2xl:gap-10">
          {/* logo */}
          <Link to="/" className="max-w-[122px] outline-none">
            <Image
              src="/public/assets/image/final_logo معدل2.png"
              alt="Ocean Soft Logo"
              loading="lazy"
              className="min-w-[122px] object-cover select-none cursor-pointer"
            />
          </Link>

          {/* nav links */}

          <nav className="hidden lg:flex items-center gap-4 2xl:gap-8 capitalize whitespace-nowrap selection:text-white selection:bg-gray-700">
            <div className="flex items-center gap-2 cursor-pointer 2xl:text-lg font-semibold">
              <p>all categories</p>
              <MdExpandMore className="text-xl" />
            </div>
            <p className="cursor-pointer 2xl:text-lg font-semibold">
              deals for you
            </p>
            <p className="cursor-pointer 2xl:text-lg font-semibold">
              what's new
            </p>
            <p className="cursor-pointer 2xl:text-lg font-semibold">delivery</p>
          </nav>

          {/* Search bar */}

          <div className="relative">
            <input
              type="text"
              placeholder="Search For Products, Brands & Categories"
              className="py-2 px-6 2xl:py-4 2xl:px-9 rounded-full lg:w-64 2xl:w-[620px] outline-none duration-75 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand peer placeholder:text-ellipsis placeholder:overflow-hidden lg:focus-within:w-96 2xl:focus-within:w-[620px] placeholder:whitespace-nowrap"
            />

            <CiSearch className="absolute lg:right-2 2xl:right-8 top-1/2 -translate-y-1/2 text-gray-500 text-2xl stroke-1 peer-focus-within:text-brand duration-75" />
          </div>

          {/* Cart & Wishlist */}

          <div className="flex items-center select-none gap-2 lg:gap-4 2xl:gap-7">
            <Link
              to="wishlist"
              className="relative outline-none"
              title="Wishlist"
            >
              <LiaHeart className="text-3xl text-black" />
              {/* badge */}
              <span className="w-4 absolute aspect-square rounded-full flex items-center justify-center text-white text-[10px] top-2 right-1 translate-x-1/2 -translate-y-1/2 bg-red-600">
                {wishlistProducts?.length}
              </span>
            </Link>

            <div className="relative" title="Profile">
              <AiOutlineUser className="text-3xl text-black" />
            </div>

            <Link to="cart" className="relative outline-none" title="Cart">
              <HiOutlineShoppingCart className="text-3xl text-black" />
              {/* badge */}
              <span className="w-4 absolute aspect-square rounded-full flex items-center justify-center text-white text-[10px] top-2 right-1 translate-x-1/2 -translate-y-1/2 bg-red-600">
                {shoppingCartProducts?.length}
              </span>
            </Link>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
