import React, { useState } from "react";

function SelectQuestion({ data = [1, 2, 3], handleAnswer }) {
    const [answer, setAnswer] = useState([]);
  return (
    <div>
      {data.map((item) => (
        <div
          key={item}
          onClick={() => {
            setAnswer(item)
            handleAnswer(item);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
function MultiSelect({ data = [1, 2, 3], handleAnswer }) {
  const [answer, setAnswer] = useState([]);
  return (
    <div>
      {data.map((item) => (
        <div
          key={item}
          onClick={() => {
            const newAnswer = [...answer, item];
            setAnswer(newAnswer);
            handleAnswer(newAnswer);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default function Question({
  question,
  currentQuestion,
  totalQuestion,
  onCheckQuestion,
  questionResult
}) {
  const [answer, setAnswer] = useState([]);

  return (
    <div>
      <SelectQuestion
        handleAnswer={(item) => {
          setAnswer(item);
        }}
      ></SelectQuestion>
      <button
        onClick={() => {
          onCheckQuestion(answer);
        }}
      ></button>
    </div>
  );
}
