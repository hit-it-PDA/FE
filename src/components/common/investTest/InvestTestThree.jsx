import React, { useState, useEffect } from "react";
import InvestButton from "../../InvestButton";
import { getQuestion } from "../../../lib/apis/testApi";

export default function InvestTestThree({ saveData, handleButtonClick }) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const fetchQuestion = async () => {
    try {
      const response = await getQuestion(3);
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
        {question.slice(0, 20)}
        <br />
        {question.slice(20, -1)}
      </p>
      <div className="mt-[7vh] flex flex-col gap-6">
        {answers.map((answer) => (
          <InvestButton
            key={answer.id}
            className="w-[80vw]"
            onClick={() => {
              const tempData = {
                question: answer.questionNo,
                answer: answer.no,
              };
              saveData(tempData);
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
