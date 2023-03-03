import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
const Navbar = ({ setCart }) => {
  const cart = useSelector((state) => state.cart);
  const countCartItem = cart.reduce(
    (prvCart, curCart) => prvCart + curCart.qyt,
    0
  );
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="#" onClick={() => setCart(false)}>
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            href="#"
            className="navHome"
            id="lws-home"
            onClick={() => setCart(false)}>
            Home
          </a>
          <a
            href="#"
            className="navCart"
            id="lws-cart"
            onClick={() => setCart(true)}>
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{countCartItem}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
