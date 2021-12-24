import React, { useState } from "react";

function ImageFilter() {
  const [filter, setFilter] = useState();

  return (
    <div className="image-filter">
      <h3>Image Filter</h3>
      <img
        src="https://cdn.mos.cms.futurecdn.net/V76ecYQPjq4PaNyD7Co6qe.jpg"
        width="auto"
        height="300"
        className={filter}
      />

      <div className="image-buttons">
        <button
          onClick={() => {
            setFilter("");
          }}
        >
          Normal
        </button>
        <button
          onClick={() => {
            setFilter("image-gray");
          }}
        >
          Black and white
        </button>
        <button
          onClick={() => {
            setFilter("image-blur");
          }}
        >
          Blur
        </button>
      </div>
    </div>
  );
}

export default ImageFilter;
