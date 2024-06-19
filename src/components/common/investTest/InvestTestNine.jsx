import React, { useState, useEffect } from "react";
import InvestButton from "../../InvestButton";
import { getQuestion } from "../../../lib/apis/testApi";
import { useNavigate } from "react-router-dom";

export default function InvestTestNine({
  testDatas,
  saveData,
  score,
  resultDatas,
}) {
  const navigate = useNavigate();
  const [localScore, setLocalScore] = useState(score);
  const [localData, setLocalData] = useState(testDatas);
  const [localResultData, setLocalResultData] = useState(resultDatas);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);

  const fetchQuestion = async () => {
    try {
      const response = await getQuestion(9);
      setQuestion(response.data.response.question);
      setAnswers(response.data.response.answers);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuestion();
  }, []);

  const handleNavigate = (newData, newScore, newResultData) => {
    navigate("/invest-test/result", {
      state: {
        testDatas: newData,
        score: newScore,
        resultDatas: newResultData,
      },
    });
  };
  const handleClick = (tempData, answerScore, answerContent) => {
    const newScore = localScore + answerScore;
    const newData = [...testDatas, tempData];
    const newResultData = [...resultDatas, answerContent];
    setLocalScore(newScore);
    setLocalData(newData);
    setLocalResultData(newResultData);
    // saveData();
    handleNavigate(newData, newScore, newResultData);
  };
  return (
    <div className="flex flex-col w-[88vw]">
      <p className="text-2xl font-bold mt-[8vh]">{question}</p>
      <div className="mt-[7vh] flex flex-col gap-6">
        {answers.map((answer) => (
          <InvestButton
            key={answer.id}
            className="w-[85vw]"
            onClick={() => {
              const tempData = {
                question: answer.questionNo,
                answer: answer.no,
              };
              // saveData(tempData);
              // addScore(answer.score);
              // handleButtonClick();
              handleClick(tempData, answer.score, answer.content);
            }}
          >
            {answer.content.slice(0, 21)}
            <br />
            {answer.content.slice(21, answer.content.length)}
          </InvestButton>
        ))}
      </div>
    </div>
  );
}
