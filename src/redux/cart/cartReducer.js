import { ADDCART, DECREMENTQYT, DELETECART, INCREMENTQYT } from "./actionTypes";
import initialState from "./initialState";

const cartId = (state) => {
  const maxId = state.reduce((prv, cart) => Math.max(prv, cart.id), -1);
  return maxId + 1;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDCART:
      const { productId, price } = action.payload;
      const existingCartItemIndex = state.findIndex(
        (item) => item.productId === productId
      );

      // if the item already exists in the cart , increase the quantity
      if (existingCartItemIndex >= 0) {
        const updatedItems = [...state];
        const existingItem = updatedItems[existingCartItemIndex];
        const updateExistingItem = {
          ...existingItem,
          qyt: existingItem.qyt + 1,
          totalPrice:
            parseInt(existingItem.price) +
            existingItem.price * existingItem.qyt,
        };

        updatedItems[existingCartItemIndex] = updateExistingItem;
        return [...updatedItems];
      }

      // if the item does not exist in the cart ,add it
      const newItem = {
        id: cartId(state),
        ...action.payload,
        qyt: 1,
        totalPrice: price,
      };
      return [...state, { ...newItem }];

    case DELETECART:
      return state.filter((item) => item.id !== action.payload);

    case INCREMENTQYT:
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          qyt: product.qyt + 1,
          totalPrice: parseInt(product.price) + product.price * product.qyt,
        };
      });

    case DECREMENTQYT:
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          qyt: product.qyt - 1,
          totalPrice: parseInt(product.totalPrice - product.price),
        };
      });
    default:
      return state;
  }
};

export default cartReducer;
