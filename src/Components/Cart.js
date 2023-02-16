import React from 'react'
import data from "../data.json";
import Items from "./Items";
export default function Cart(props) {
    const {cart}=props;
    return (
      <div>
        <div className="container my-3">
          <div className="text-center">
            <h3>Cart Items</h3>
          </div>
          <div>{cart.length ===0 && <div>Cart is Empty</div>    }</div>
        </div>
      </div>
    );
}
