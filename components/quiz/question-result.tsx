import React from "react";

import styles from "./quiz-questions.module.css";

type QuestionResultProps = {
  isRejection: boolean;
  onClose: () => void;
}

export default function QuestionResult({isRejection, onClose}: QuestionResultProps) {

  const rejected = (<p>Unfortunately, we are unable to prescribe this medication for you. This
          is because finasteride can alter the PSA levels, which maybe used to monitor for cancer.
          You should discuss this further with your GP or specialist if you would still like this
          medication.</p>);

  const approved = (<p>“Great news! We have the perfect treatment for your
          hair loss. Proceed to <a href={"www.manual.co"}>www.manual.co</a>, and prepare to say hello to your new hair!”</p>);


  return (
    <div className={styles.results}>
      <h2>Results</h2>
      {isRejection ? rejected : approved }
      <button onClick={onClose}>Close</button>
    </div>
  )
}