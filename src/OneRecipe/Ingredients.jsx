import React from "react";
import "../style.css";

export default function Ingredients(props) {
  return (
    <div className="in-ing">
      <input type="checkbox" className="checkbox" />
      <div className="in-ing-ing">{props.ingre}</div>
      <button onClick={() => {
        props.clickRemove(props.id)
      }}>remove</button>
    </div>
  );
}
