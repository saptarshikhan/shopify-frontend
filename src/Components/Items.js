import React from "react";
import "./items.css";
export default function Items({ name, imageUrl }) {
  return (
    <div className="box">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <a href="#" className="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}
