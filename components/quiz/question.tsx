import React from "react";

// components
import { QuestionProps } from "@/components/props";

import styles from "@/components/quiz/quiz-questions.module.css";

type QuestionPropsType = {
  questionData: QuestionProps
  currentQuestionIndex: number;
  userAnswers: any[];
  handleAnswer: (value: string | boolean, isRejection: boolean) => void;
  prevQuestion: () => void;
}
export default function Question({
  questionData,
  currentQuestionIndex,
  userAnswers,
  handleAnswer,
  prevQuestion
}: QuestionPropsType) {
  return (
    <>
      <div className={styles.question}>{questionData.question}</div>
      <ul className={styles.choices}>
        {questionData.options.map((option, i) => {
          return (
            <li key={i} className={styles.choice}>
              <label>
                <input
                  type="checkbox"
                  name={`question${currentQuestionIndex}`}
                  value={option.value.toString()}
                  checked={userAnswers[currentQuestionIndex] === option.value}
                  onChange={() => handleAnswer(option.value, option.isRejection)}
                />
                <span style={{marginLeft: "20px"}} dangerouslySetInnerHTML={{ __html: option.display }} />
              </label>
            </li>
          )
        })}
      </ul>
      <div className={styles.navigation}>
        <button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
      </div>
    </>
  )
}