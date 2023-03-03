import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartQytDecrement,
  cartQytIncrement,
  deleteCart,
} from "../redux/cart/actions";
import {
  productQytDecrement,
  productQytIncrement,
} from "../redux/product/actions";

const CartCard = ({ cart }) => {
  const { quantity } = useSelector((state) => state.product[cart.productId]);
  const dispatch = useDispatch();

  const handleDelete = (cart) => {
    dispatch(deleteCart(cart.id));
    dispatch(productQytIncrement({ id: cart.productId, increment: cart.qyt }));
  };

  const handleIncrement = (cart) => {
    dispatch(cartQytIncrement(cart.id));
    dispatch(productQytDecrement(cart.productId));
  };
  const handleDecrement = (cart) => {
    dispatch(cartQytDecrement(cart.id));
    dispatch(productQytIncrement({ id: cart.productId, increment: 1 }));
  };
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="lws-cartImage" src={cart.imgUrl} alt="product" />
        <div className="space-y-2">
          <h4 className="lws-cartName">{cart.name}</h4>
          <p className="lws-cartCategory">{cart.category}</p>
          <p>
            BDT <span className="lws-cartPrice">{cart.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            disabled={quantity === 0}
            onClick={() => handleIncrement(cart)}>
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{cart.qyt}</span>
          <button
            className="lws-decrementQuantity"
            disabled={cart.qyt === 1}
            onClick={() => handleDecrement(cart)}>
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{cart.totalPrice}</span>
        </p>
      </div>
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => handleDelete(cart)}>
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartCard;
