import notify from "../helpers/notify";

export const wishlistStore = (set, get) => ({
  wishlistProducts: JSON.parse(localStorage.getItem("wishlist")) ?? [],
  getWishlistProducts: () => get().wishlistProducts,
  addProductToWishlist: (product) => {
    set((store) => {
      const wishlist = store.getWishlistProducts();

      if (wishlist.some((favorite) => favorite.id == product.id)) {
        notify("warn", "Product is allready in wishlist");

        return { wishlistProducts: wishlist };
      } else {
        notify("done", "Product added to wishlist");
        localStorage.setItem(
          "wishlist",
          JSON.stringify([...wishlist, product])
        );
        return {
          wishlistProducts: [...store.wishlistProducts, product],
        };
      }
    });
  },
  removeProductFromWishlist: (productId) => {
    set((store) => {
      const filteredWishlist = [
        ...store.wishlistProducts.filter(
          (favorite) => favorite.id != productId
        ),
      ];

      localStorage.setItem("wishlist", filteredWishlist);

      notify("done", "Product removed from wishlist");

      return { wishlistProducts: filteredWishlist };
    });
  },
});
