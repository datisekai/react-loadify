import React from "react";
import { IDDot } from "../types";

const DDot: React.FC<IDDot> = ({ color = "#000", size = 60, speed = 1500 }) => {
  return (
    <div id="d-dot">
      <div
        className={"loader"}
        style={{
          width: size,
          animationDuration: `${speed}ms`,
          background: `radial-gradient(circle closest-side, ${color} 90%, #0000) 0 /
          calc(100% / 3) 100% space`,
        }}
      ></div>
    </div>
  );
};

export default DDot;
