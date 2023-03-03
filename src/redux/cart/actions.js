import { ADDCART, INCREMENTQYT, DECREMENTQYT, DELETECART } from "./actionTypes";

export const addCart = (product) => {
  return {
    type: ADDCART,
    payload: product,
  };
};
export const deleteCart = (id) => {
  return {
    type: DELETECART,
    payload: id,
  };
};

export const cartQytIncrement = (cartId) => {
  return { type: INCREMENTQYT, payload: cartId };
};
export const cartQytDecrement = (cartId) => {
  return { type: DECREMENTQYT, payload: cartId };
};
