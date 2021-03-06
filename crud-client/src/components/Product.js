import React, { Component } from "react";
import { Link } from "react-router-dom";


const Product = ({ product, cols, showStock, editing, deleteProduct }) => (
  <div className={`card ${cols}`}>
    <img className="card-img-top" src={product.image} alt={product.title} />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <p className="card-text">${product.price}</p>
      {
        showStock ?
        <p className="card-text">{product.quantity} in stock</p> :
        ''
      }
      {
        editing ?
        <div>
          <Link to={`/products/${product.id}/edit`} className="btn btn-info">Edit Product</Link>
          <button onClick={deleteProduct} className="btn btn-primary">Delete Product</button>
        </div> :
        <Link to={`/products/${product.id}`} className="btn btn-primary">View Product</Link>
      }
    </div>
  </div>
);

export default Product