import React from "react";

export default function Directions(props) {
  return <div className="step"><b>Step {props.count + 1} :</b> {props.direction.step}</div>;
}
