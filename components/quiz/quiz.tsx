// components
import QuizQuestions from "@/components/quiz/quiz-questions";

// props
import { QuestionsProps } from "@/components/props";

import styles from "./Quiz.module.css";

type QuizProps = {
  onClose: () => void;
  questionsData: QuestionsProps;
}

export default function Quiz({ onClose, questionsData }: QuizProps) {
  return (
    <div className={styles.quiz}>
      <QuizQuestions onClose={onClose} questionsData={questionsData}/>
    </div>
  );
};
