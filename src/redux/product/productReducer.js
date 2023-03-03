import { ADDPRODUCT, DECREMENTQYT, INCREMENTQYT } from "./actionTypes";
import initialState from "./initialState";

const productID = (state) => {
  const maxid = state.reduce((prv, product) => Math.max(prv, product.id), -1);
  return maxid + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [
        ...state,
        {
          id: productID(state),
          ...action.payload,
        },
      ];
    case INCREMENTQYT:
      return state.map((product) => {
        if (product.id !== action.payload.id) {
          return product;
        }
        return {
          ...product,
          quantity: product.quantity + action.payload.increment,
        };
      });
    case DECREMENTQYT:
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      });

    default:
      return state;
  }
};

export default productReducer;
