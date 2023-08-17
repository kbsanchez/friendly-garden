import React from "react";
import "./Pot.css";

const Pot = (potColor) => {
  return (
    <div className="pot-container">
      <div className={`pot-circle outer-circle ${potColor.potColor}`} />
      <div className={`pot-circle inner-circle ${potColor.potColor}-inner`} />
    </div>
  );
};

export default Pot;