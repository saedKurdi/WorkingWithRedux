import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import { ActionType } from "../types/ActionType";
import { Product } from "../types/Product";
import { products } from "../data/products";

export type InitialStateType = {
  products: Product[];
  cart: Product[];
};

const enhancer = devToolsEnhancer();

const InitialState: InitialStateType = {
  products: products,
  cart: [],
};

const rootReducer = (state = InitialState, action: ActionType) => {
  switch (action.type) {
    case "products/decreasecount":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === Number(action.payload)) {
            if (product.quantity === 0) {
              alert("PRODUCT BITMISHDIR !");
              return product;
            }
            let c = 0;
            state.cart.forEach((p) => {
              if (p.id === product.id) {
                p.quantity = p.quantity + 1;
                c += 1;
              }
            });
            if (c != 1)
              state.cart.unshift({
                ...product,
                quantity: 1,
              });
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        }),
      };
    case "cart/decreasecount":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer, enhancer);
