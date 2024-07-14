import { InitialStateType } from "./store";

const getProducts = (state: InitialStateType) => state.products;
const getCart = (state: InitialStateType) => state.cart;

export { getProducts, getCart };
