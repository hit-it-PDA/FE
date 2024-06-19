import React, { useState, useEffect } from "react";
import InvestButton from "../../InvestButton";
import { getQuestion } from "../../../lib/apis/testApi";

export default function InvestTestEight({
  saveData,
  handleButtonClick,
  addScore,
  saveResultData,
}) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const fetchQuestion = async () => {
    try {
      const response = await getQuestion(8);
      setQuestion(response.data.response.question);
      setAnswers(response.data.response.answers);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div className="flex flex-col w-[88vw]">
      <p className="text-2xl font-bold mt-[8vh]">
        {question.slice(0, 9)}
        <br />
        {question.slice(9, -1)}
      </p>
      <div className="mt-[7vh] flex flex-col gap-6">
        {answers.map((answer) => (
          <InvestButton
            key={answer.id}
            className="w-[55vw] h-[10vh]"
            onClick={() => {
              const tempData = {
                question: answer.questionNo,
                answer: answer.no,
              };
              saveData(tempData);
              saveResultData(answer.content);
              addScore(answer.score);
              handleButtonClick();
            }}
          >
            {answer.content}
          </InvestButton>
        ))}
      </div>
    </div>
  );
}
