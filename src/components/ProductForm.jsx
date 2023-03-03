import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/actions";

const initialState = {
  name: "",
  category: "",
  imgUrl: "",
  price: 0,
  quantity: 0,
};

const ProductForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...state }));
    setState({
      name: "",
      category: "",
      imgUrl: "",
      price: 0,
      quantity: 0,
    });
  };
  return (
    <form
      className="space-y-4 text-[#534F4F]"
      id="lws-addProductForm"
      onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="lws-inputName">Product Name</label>
        <input
          className="addProductInput"
          id="lws-inputName"
          type="text"
          name="name"
          onChange={handleChange}
          value={state.name}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="lws-inputCategory">Category</label>
        <input
          className="addProductInput"
          id="lws-inputCategory"
          type="text"
          name="category"
          onChange={handleChange}
          value={state.category}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="lws-inputImage">Image Url</label>
        <input
          className="addProductInput"
          id="lws-inputImage"
          type="text"
          name="imgUrl"
          onChange={handleChange}
          value={state.imgUrl}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="ws-inputPrice">Price</label>
          <input
            className="addProductInput"
            type="number"
            id="lws-inputPrice"
            name="price"
            onChange={handleChange}
            value={state.price}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lws-inputQuantity">Quantity</label>
          <input
            className="addProductInput"
            type="number"
            id="lws-inputQuantity"
            name="quantity"
            onChange={handleChange}
            value={state.quantity}
            required
          />
        </div>
      </div>
      <button type="submit" id="lws-inputSubmit" className="submit">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
