import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

function Review() {
  const data = [
    {
      image: "https://i.mydramalist.com/R4KKz_5f.jpg",
      name: "Yaya",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image:
        "https://www.biography.com/.image/t_share/MTU0NDU2MTI2ODc4OTE3Njgy/hailee-steinfeld-visits-build-london-on-december-7-2017-in-london-england-photo-by-mike-marsland_mike-marsland_wireimage-square.jpg",
      name: "Hailey",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F08%2Fgettyimages-632497192-2000.jpg&q=85",
      name: "Yaya",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing eli",
    },
  ];

  function random(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const [review, setReview] = useState(data);
  console.log("hi", review);
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
      <h1>Review</h1>
      <div
        style={{
          height: 400,
          width: 450,
          border: "1px solid gray",
          textAlign: "center",
          padding: 30,
        }}
      >
        <Carousel>
          {review.map((x) => (
            <Paper>
              <img src={x.image} height="100" width="auto" />
              <p>{x.name}</p>
              <p>{x.review}</p>
            </Paper>
          ))}
        </Carousel>
        <div></div>
        <Button
          style={{ marginTop: 10, cursor: "pointer" }}
          onClick={() => setReview(random(data))}
        >
          Shuffle
        </Button>
      </div>
    </div>
  );
}

export default Review;
