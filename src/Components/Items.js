import React from "react";
import "./items.css";
import data from "../data.json";
import "./Category.js"; 
import Category from "./Category.js";
export default function Items({ name, imageUrl,setCart }) {
  // const add=(()=>{
  //   data.map((item)=> {
  //    // if({item.visible=== "false"}) {
  //       item.visible="true";
  //       setCart("true");
  //     }
  //   })
  // })
  return (
    <div className="box">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="btn btn-danger" >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}
