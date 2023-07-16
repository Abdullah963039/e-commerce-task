import axios from "axios";

const PRODUCTS_URL =
  "https://5ac0f813-aa9e-4010-8824-c80322e15893.mock.pstmn.io/api/products?page=";

export const productsStore = (set, get) => ({
  products: [],
  pagination: null,
  getProducts: () => get().products,
  getAllProducts: async (page = 1) => {
    try {
      const response = await axios.get(PRODUCTS_URL + page);

      set({ products: response.data.response.data });
      set({
        pagination: {
          totalPages: response.data.response.last_page,
          perPage: response.data.response.per_page,
        },
      });

      return response.data.response;
    } catch (err) {
      console.log(err);
    }
  },
});
