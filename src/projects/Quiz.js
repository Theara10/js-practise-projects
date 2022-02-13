import React, { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";

const data = [
  {
    questionText: "Who is Luke Skywalker's father?",
    answerOptions: [
      { answerText: "Obiwan Kenobi", isCorrect: false },
      { answerText: "Darth Vader", isCorrect: true },
      { answerText: "Cad Bane", isCorrect: false },
      { answerText: "Darth Maul", isCorrect: false },
    ],
  },
  {
    questionText: "Who is Batman?",
    answerOptions: [
      { answerText: "Bruce Wayne", isCorrect: false },
      { answerText: "Harvey Dent", isCorrect: true },
      { answerText: "Alfred", isCorrect: false },
      { answerText: "Darth Maul", isCorrect: false },
    ],
  },
];

function Quiz() {
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <div className="quiz">
      <div className="quiz-card">
        <h1>Quiz App</h1>
        {data.map((x) => (
          <div>
            <h4>{x.questionText}</h4>
            <input
              type="checkbox"
              checked={true}
              name={x.answerOptions.answerText}
              onChange={(e) => setInput(e.target.value)}
            />
            <label>{x.answerOptions.answerText}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
