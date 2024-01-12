import React from "react";
import { IDSpinner } from "../types";

const DSpinner: React.FC<IDSpinner> = ({
  color = "#fff",
  size = 48,
  speed = 1500,
  borderWidth = 5,
}) => {
  return (
    <div id="d-spinner">
      <span
        className={"loader"}
        style={{
          width: size,
          height: size,
          borderWidth,
          animationDuration: `${speed}ms`,
          borderColor: `${color} ${color} transparent ${color}`,
        }}
      ></span>
    </div>
  );
};

export default DSpinner;
