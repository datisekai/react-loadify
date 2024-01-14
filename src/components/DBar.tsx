import React from "react";
import { IDBar } from "../types";

const DBar: React.FC<IDBar> = ({ color = "#000", size = 60, speed = 1500 }) => {
  return (
    <div id="d-bar">
      <div
        className={"loader"}
        style={
          {
            width: size,
            animationDuration: `${speed}ms`,
            "--c": `no-repeat linear-gradient(${color} 0 0)`,
          } as any
        }
      ></div>
    </div>
  );
};

export default DBar;
