"use client";
import Process from "@/components/book/process";
import Question from "@/components/book/question";
import React, { useEffect, useState } from "react";

const Dflip = () => {
  const pdf =
    "https://api.thuvienso.minhviet.group/pdf/vn/loi-hua-cua-bac-ho.pdf";
  const questions = [1, 5, 3];
  const questionInteractive = 1;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [point, setPoint] = useState(0);
  // TODO Nhớ clear questionResult khi tắt modal question
  const [questionResult, setQuestionResult] = useState({});
  const [answerHistory, setAnswerHistory] = useState([]);
  console.log(currentPage);
  function initDflip() {
    var option_images = {
      webgl: true,
      // singlePageMode: 1,
      pageSize: 1,
      zoomRatio: 1.5,
      pageMode: DFLIP.PAGE_MODE.DOUBLE,
      height: "100%",
      scrollWheel: false,
      onFlip: function (flipBook) {
        // console.log(flipBook);
        setCurrentPage(flipBook.target._activePage);
      },
      onCreateUI: function (flipBook) {},
    };
    $("#flipBookImageContainer").flipBook(pdf, option_images);
  }
  function onStarClick() {
    console.log("CurrentPage", currentPage);
  }
  function checkQuestion(answer) {
    // TODO CALL API
    setPoint(point + 1);
    setQuestionResult({
      rightAnswer: 1,
      result: false,
    });
    setAnswerHistory(
      answerHistory.push({
        answer: answer,
        question: questions[currentQuestion],
        rightAnswer: true,
      })
    );
    // check xem có phải câu hỏi cuối cùng hay ko
    if (currentQuestion === questions.length - 1) {
      // set 1 state để show modal
    } else {
        setCurrentQuestion(currentQuestion + 1)
    }
  }
  useEffect(() => {
    initDflip();

    return () => {};
  }, []);

  return (
    <>
      <div id="flipBookImageContainer" className="flex-1 relative"></div>
      <Process onStarClick={onStarClick}></Process>
      {true && (
        <Question
          onCheckQuestion={checkQuestion}
          questionResult={questionResult}
        ></Question>
      )}
    </>
  );
};

export default Dflip;
