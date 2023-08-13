import React from "react";
import "./Square.css";

function Square({value,clk}) {
  return (
    <div className="square" onClick={clk}>
      <h1>{value}</h1>
    </div>
  );
}

export default Square;
