import React from "react";
import bankCards from "../../Image/footer-cards.png";
import logo from "../../Image/footer-logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="d-flex footer-background">
      <div>
        <p className="title">
          RIGHT <span className="title-half">FIT.COM</span>
        </p>
        <ul className="footer-menu">
          <li>Home</li>
          <li>All Products</li>
          <li>Featured Products</li>
          <li>Contacts</li>
          <li>About Us</li>
        </ul>
      </div>
      <div
        className="d-flex flex-column footer-content"
        style={{ margin: "104px" }}
      >
        <div>
          We are a registered E-Commerce seller and we support a variety of
          Local and International payment modes
        </div>
        <div>
          <img src={bankCards} alt="cards" />
        </div>
      </div>
      <div style={{ margin: "104px" }}>
        <p className="text-light">Website protected by</p>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
