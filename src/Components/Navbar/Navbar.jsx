import "./Navbar.css";
import cart from "../../Image/cart.png";

import React from "react";

const Navbar = () => {
  return (
    <div className="bg-img">
      <div className="d-flex justify-content-between">
        <div className="title">
          RIGHT <span className="title-half">FIT.COM</span>
        </div>
        <div className="menu">
          <div className="d-flex justify-content-around">
            <p>All Products</p>
            <p>Featured Products</p>
            <div>
              <img src={cart} alt="cart" className="me-3" />0
            </div>
          </div>
        </div>
      </div>
      <div className="m-5 py-2">
        <h1>Latest Styles</h1>
        <p className="tag-line">At Yesterday’s Prices</p>
        <button type="button" className="btn-font p-2 border-0">
          BROWSE ALL STYLES
        </button>
      </div>
    </div>
  );
};

export default Navbar;
