import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";

function ColorFlip() {
  const [color, setColor] = useState("red");
  const { value, setValue } = useContext(UserContext);

  function getColor() {
    const allColor = ["red", "blue", "black", "pink"];
    const index = Math.floor(Math.random() * allColor.length) + 0;
    let randomColor = allColor[index];
    setColor(randomColor);
  }
  return (
    <div style={{ backgroundColor: color }}>
      <h2>Color Flip app</h2>
      {value}
      <button onClick={getColor}>Flip Color</button>
      <button onClick={() => setValue("fuck you")}>Flip Color</button>
    </div>
  );
}

export default ColorFlip;
