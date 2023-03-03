import { ADDPRODUCT, DECREMENTQYT, INCREMENTQYT } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};
export const productQytIncrement = (productId) => {
  return {
    type: INCREMENTQYT,
    payload: productId,
  };
};
export const productQytDecrement = (productId) => {
  return {
    type: DECREMENTQYT,
    payload: productId,
  };
};
