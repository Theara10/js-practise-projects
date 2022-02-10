import React, { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";

function Quiz() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  return (
    <div className="quiz">
      <div className="quiz-card">
        <h1>Quiz App</h1>
        <h4>What is 1 + 1?</h4>
        <input type="checkbox" placeholder="The answer is 2" name="name" />
      </div>
    </div>
  );
}

export default Quiz;
