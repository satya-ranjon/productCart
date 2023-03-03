import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cart/actions";
import { productQytDecrement } from "../redux/product/actions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handelAddToCart = (product) => {
    dispatch(
      addCart({
        productId: product.id,
        price: product.price,
        name: product.name,
        category: product.category,
        imgUrl: product.imgUrl,
      })
    );
    dispatch(productQytDecrement(product.id));
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={product.imgUrl} />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{product.name}</h4>
        <p className="lws-productCategory">{product.category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{product.price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{product.quantity}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          disabled={product.quantity === 0}
          onClick={() => handelAddToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
