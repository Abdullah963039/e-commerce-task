import notify from "../helpers/notify";
import getTotalPrice from "../helpers/getTotalPrice";

export const cartStore = (set, get) => ({
  totalCartPrice: getTotalPrice(JSON.parse(localStorage.getItem("cart"))) ?? 0,
  shoppingCartProducts: JSON.parse(localStorage.getItem("cart")) ?? [],
  getCartProducts: () => get().shoppingCartProducts,
  addProductToCart: (product, quantity) => {
    set((store) => {
      if (store.shoppingCartProducts.find((prod) => prod.id == product.id)) {
        const updatedCartProduct = store.shoppingCartProducts.map((prod) => {
          if (prod.id == product.id) {
            const newProduct = {
              ...prod,
              quantity: prod.quantity + quantity,
            };
            return newProduct;
          } else {
            return prod;
          }
        });

        localStorage.setItem("cart", JSON.stringify(updatedCartProduct));
        notify("done", "Quantity has been updated");
        return {
          shoppingCartProducts: [...updatedCartProduct],
          totalCartPrice: getTotalPrice(updatedCartProduct),
        };
      } else {
        const newCartProducts = [
          ...store.shoppingCartProducts, // Save previous products
          { ...product, quantity }, // Add new product to cart
        ];

        localStorage.setItem("cart", JSON.stringify(newCartProducts)); // Save to localStorage

        notify("done", "Product added successfully");

        return {
          shoppingCartProducts: newCartProducts,
          totalCartPrice: getTotalPrice(newCartProducts),
        };
      }
    });
  },
  removeProductFromCart: (productId) => {
    set((store) => {
      const filteredProducts = [
        ...store.shoppingCartProducts.filter(
          (product) => product.id != productId
        ),
      ];

      localStorage.setItem("cart", JSON.stringify(filteredProducts));

      notify("done", "Product removed successfully");
      return {
        shoppingCartProducts: filteredProducts,
        totalCartPrice: getTotalPrice(filteredProducts),
      };
    });
  },
  updateCartProductQuantity: (productId, newValue) => {
    set((store) => {
      const updatedVersionOfCart = store.shoppingCartProducts.map(
        (cartProduct) => {
          if (cartProduct.id == productId) {
            return { ...cartProduct, quantity: newValue };
          } else {
            return { ...cartProduct };
          }
        }
      );

      localStorage.setItem("cart", JSON.stringify(updatedVersionOfCart));

      return {
        shoppingCartProducts: [...updatedVersionOfCart],
        totalCartPrice: getTotalPrice(updatedVersionOfCart),
      };
    });
  },
});
