import axios from "axios";
import React, { useState, useEffect } from "react";

function Axios() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setdata(json);
    //     // console.log(json);
    //   });
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => response.data)
      .then((res) => {
        setdata(res);
      });
    // .catch((err) => console.error(err));
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((x) => {
        console.log(x.title);
        return (
          <div>
            <h2>{x.title}</h2>
            <p>{x.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Axios;
