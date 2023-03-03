import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

const Product = () => {
  const product = useSelector((state) => state.product);
  return (
    <main className="py-16">
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          {product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div>
          <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <ProductForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
