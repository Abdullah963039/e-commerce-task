import { create } from "zustand";

// Store Partitions
import { productsStore } from "../Store/productsStore";
import { cartStore } from "../Store/cartStore";
import { wishlistStore } from "../Store/wishlistStore";

const store = (...props) => ({
  // store goes here
  ...productsStore(...props),
  ...cartStore(...props),
  ...wishlistStore(...props),
});

const useGlobalStore = create(store);

export default useGlobalStore;
