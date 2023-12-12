import React from "react";

export const Card = ({ image, name, price, materialId, colorId }) => {
  return (
    <div className={image} style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">{price}</p>
        <p className="card-text">{materialId}</p>
        <p className="card-text">{colorId}</p>
      </div>
    </div>
  );
};
