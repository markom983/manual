import React, { useState } from "react";

// components
import Question from "@/components/quiz/question";
import QuestionResult from "@/components/quiz/question-result";

// props
import { QuestionProps, QuestionsProps } from "@/components/props";


type QuizProps = {
  onClose: () => void;
  questionsData: QuestionsProps;
}

export default function QuizQuestions({ onClose, questionsData }:QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questionsData.questions.length).fill(null));
  const [isRejection, setIsRejection] = useState(false);

  const handleAnswer = (choice: string | boolean, isRejection: boolean) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = choice;
    setUserAnswers(newAnswers);

    if (isRejection) {
      setIsRejection(true);
    }

    if (currentQuestionIndex <= questionsData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const isLastQuestion = currentQuestionIndex === questionsData.questions.length;
  const questionData: QuestionProps = questionsData.questions[currentQuestionIndex];

  return (
    <>
      {!isLastQuestion ? (
        <Question
          questionData={questionData}
          currentQuestionIndex={currentQuestionIndex}
          handleAnswer={handleAnswer}
          userAnswers={userAnswers}
          prevQuestion={prevQuestion}
        />
      ) : (
        <QuestionResult isRejection={isRejection} onClose={onClose} />
      )}
    </>
  )
}