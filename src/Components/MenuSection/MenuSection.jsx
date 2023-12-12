import React, { useState } from "react";
import "./MenuSection.css";
import { useCart } from "react-use-cart";
import { Cart } from "../Cart/Cart";

const MenuSection = ({ products, colors, materials }) => {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const { addItem } = useCart();
  const handleClick = (product) => {
    addItem(product);
    setIsCartOpen(true);
  };

  return (
    <div className="row pt-3" style={{ width: "100%" }}>
      {isCartOpen && <Cart />}
      {products.map((product) => {
        return (
          <div
            className="mx-4 mb-5"
            style={{ width: "18rem" }}
            key={product.id}
          >
            <div className="img-container ">
              <img src={product.image} className="card-img-top " alt="image" />
              <button
                className="btn text-light"
                onClick={() => handleClick(product)}
              >
                Add to Cart
              </button>
            </div>
            <h5 className="card-title">{product.name}</h5>

            <div className="d-flex">
              <p className="pe-3">
                {
                  colors.filter((color) => {
                    return color.id == product.colorId;
                  })[0]?.name
                }
              </p>
              <p className="pe-3">
                {
                  materials.filter((material) => {
                    return material.id == product.materialId;
                  })[0]?.name
                }
              </p>
            </div>
            <p className="product-price">INR {product.price}.00</p>
          </div>
        );
      })}
    </div>
  );
};

export default MenuSection;
