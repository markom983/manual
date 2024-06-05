// components
import { QuestionProps } from "@/components/props";

import styles from "./quiz-question.module.css";

type QuestionPropsType = {
  questionData: QuestionProps
  currentQuestionIndex: number;
  userAnswers: any[];
  handleAnswer: (value: string | boolean, isRejection: boolean) => void;
  prevQuestion: () => void;
}
export default function QuizQuestion({
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
                  value={option.value.toString()}
                  checked={userAnswers[currentQuestionIndex] === option.value}
                  onChange={() => handleAnswer(option.value, option.isRejection)}
                />
                <span style={{marginLeft: "20px"}} dangerouslySetInnerHTML={{ __html: option.display }} />
              </label>
            </li>
          );
        })}
      </ul>
      <div className={styles.navigation}>
        {currentQuestionIndex === 0 ? null : (<button onClick={prevQuestion}>Previous</button>)}
      </div>
    </>
  );
}
