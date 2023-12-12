import React from "react";
import { useCart } from "react-use-cart";
import cartImg from "../../Image/cart.png";
import "./Cart.css";

export const Cart = () => {
  const { isEmpty, totalItems, cartTotal, updateItemQuantity, items } =
    useCart();

  if (isEmpty) {
    return <></>;
  }
  return (
    <div className="cart-background">
      <div className="d-flex justify-content-between p-5">
        <div className="cart-title text-dark">All Products</div>
        <div className="cart-title">Featured Products</div>
        <div>
          <img src={cartImg} alt="cart" />
          <span className="px-2">Total items: {totalItems}</span>
        </div>
      </div>
      <div className="d-flex flex-column ms-4">
        <h4 className="shopping-cart-title">Shopping Cart</h4>
        {items.map((item) => {
          return (
            <div className="d-flex mb-4" key={item.id}>
              <div className="store-img">
                <img src={item.image} alt="" style={{ width: "100%" }} />
              </div>
              <div className="ms-4">
                <h4 className="cart-item-header">{item.name}</h4>
                <p className="card-text"> {item.price} </p>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-danger "
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <p className="px-2">{item.quantity}</p>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div>Total pricing: {cartTotal}</div>
      </div>
    </div>
  );
};
