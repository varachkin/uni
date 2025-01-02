import { createSlice } from "@reduxjs/toolkit";
import { IactionGlobalStateDataMachine, IcartProduct } from "../../interfaces";

const initialState: IactionGlobalStateDataMachine = {
  products: [],
  cart: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState: () => initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload;
    },
    updateCart: (state, actions) => {
      state.cart = [...actions.payload];
    },
    addToCart: (state, actions) => {
      const { product, quantity } = actions.payload;
      const existingProductIndex = state.cart.findIndex(
        (el) => el?.product?.product?.id === product?.product?.id
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += quantity;
      } else {
        state.cart.push({
          quantity: quantity,
          product: product,
        });
      }

    },
    removeFromCart: (state, actions) => {
      state.cart = state.cart.filter(
        (cartItem: IcartProduct) => cartItem.product.product.id !== actions.payload
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
    increeseCartProduct: (state, actions) => {
      state.cart = state.cart.map((cartItem: IcartProduct) => {
        if (cartItem.product.product.id === actions.payload) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return { ...cartItem };
        }
      });
    },
    decreeseCartProduct: (state, actions) => {
      state.cart = state.cart.map((cartItem: IcartProduct) => {
        if (cartItem.product.product.id === actions.payload) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return { ...cartItem };
        }
      });
    },
    setQuantityCartProduct: (state, actions) => {
      state.cart = state.cart.map((product: IcartProduct) => {
        if (product.product_id === actions.payload) {
          return { ...product, count: product.product.quantity };
        } else {
          return { ...product };
        }
      });
    },
    setQuantityCartAllProducts: (state) => {
      state.cart = state.cart.map((product: IcartProduct) => {
        if (product.count > product.product.quantity) {
          return { ...product, count: product.product.quantity };
        } else {
          return product;
        }
      });
    },
    applyDiscountCode: (state, actions) => {
      const { discount_data } = actions.payload;
      const discountProducts = discount_data.products;
      const updatedCart: any[] = [];
      state.cart.forEach((item: IcartProduct) => {
        if (discountProducts.includes(item.product_id)) {
          if (!item.product.regular_price) {
            let discountedProduct = { ...item.product };
            const originalPrice = discountedProduct.price;

            if (discount_data.value_type === "amount") {
              discountedProduct.price = Math.max(
                0,
                discountedProduct.price - discount_data.value
              );
            } else if (discount_data.value_type === "percent") {
              discountedProduct.price = Math.max(
                0,
                discountedProduct.price -
                (discountedProduct.price * discount_data.value) / 100
              );
            }
            updatedCart.push({
              count: 1,
              discount_code_used: true,
              product: {
                ...discountedProduct,
                regular_price: originalPrice,
              },
              product_id: item.product_id,
            });

            if (item.count > 1) {
              updatedCart.push({
                count: item.count - 1,
                product: {
                  ...item.product,
                },
                product_id: item.product_id,
              });
            }
          } else {
            updatedCart.push(item);
          }
        } else {
          updatedCart.push(item);
        }
      });
      state.cart = updatedCart;
    },
  },
});

export const {
  applyDiscountCode,
  setProducts,
  addToCart,
  removeFromCart,
  clearCart,
  decreeseCartProduct,
  increeseCartProduct,
  updateCart,
  setQuantityCartProduct,
  setQuantityCartAllProducts,
} = dataSlice.actions;
export default dataSlice.reducer;
