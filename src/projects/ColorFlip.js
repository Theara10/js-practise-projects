import React, { useState } from "react";

function ColorFlip() {
  const [color, setColor] = useState("red");

  function getColor() {
    const allColor = ["red", "blue", "black", "pink"];
    const index = Math.floor(Math.random() * allColor.length) + 0;
    let randomColor = allColor[index];
    setColor(randomColor);
  }
  return (
    <div style={{ backgroundColor: color }}>
      <h2>Color Flip app</h2>
      <button onClick={getColor}>Flip Color</button>
    </div>
  );
}

export default ColorFlip;
