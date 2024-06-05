import { ReactNode } from "react";

import styles from "./quiz-modal.module.css";

type QuizModalProps = {
  isOpen: boolean;
  children: ReactNode;
}

export default function QuizModal({ isOpen, children }: QuizModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <dialog className={styles.overlay}>
      <div className={styles.modal}>
        {children}
      </div>
    </dialog>
  );
}
