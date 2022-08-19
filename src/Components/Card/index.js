import React from "react";
import "./index.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">Learn More</button>
    </div>
  );
};

export default Card;
