import React from "react";
import { useSelector } from "react-redux";
import BillDetailsCard from "../components/billDetailsCard";
import CartCard from "../components/CartCard";

const Cart = () => {
  const carts = useSelector((state) => state.cart);
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {carts.map((cart) => (
              <CartCard cart={cart} key={cart.id} />
            ))}
          </div>
          <div>
            <BillDetailsCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
