import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <h1>Counter</h1>
      <p>{count}</p>
      <div
        style={{
          display: "flex",
          marginTop: 20,
        }}
      >
        <button style={{ marginLeft: 10 }} onClick={decrease}>
          Decrease
        </button>
        <button style={{ marginLeft: 10 }} onClick={reset}>
          Reset
        </button>
        <button style={{ marginLeft: 10 }} onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;
