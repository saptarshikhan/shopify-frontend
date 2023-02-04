import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Items from "./Items";
import data from "../data.json";
export default function Category(props) {
  return (
    <>
      <div className="container my-3">
        <div className="text-center">
          <h3>{props.heading}</h3>
        </div>
        <div className="row my-3">
          {data.map((item) => {
            if (props.val === true || props.val === item.categoryName) {
              return (
                <div className="col-4">
                  <Items
                    key={item.images[0].baseUrl}
                    name={item.name}
                    imageUrl={item.images[0].baseUrl}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
Category.propTypes = {
  heading: PropTypes.string,
};
