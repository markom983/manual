"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// components
import Quiz from "@/components/quiz/quiz";
import QuizModal from "@/components/quiz/modal/quiz-modal";

// icon
import symbolIcon from "@/public/symbol.svg";

// props
import { QuestionsProps } from "@/components/props";

import styles from "./header-content.module.css";

type HeaderContentProps = {
  questionsData: QuestionsProps
}

export default function HeaderContent({questionsData}: HeaderContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    }

    return (() => {
      document.body.style.overflow = "scroll";
    });
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.headerContent}>
      <Image src={symbolIcon} alt={"symbol icon"} priority className={styles.headerSymbolIcon} height={40} width={40}/>
      <div className={styles.container}>
        <span className={styles.headerTitle} >Be good {"\n"}to yourself</span>
        <p className={styles.headerDescription}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
        <button className={styles.takeTheQuizButton} onClick={openModal}>Take the quiz</button>
        <QuizModal isOpen={isModalOpen}>
          <Quiz onClose={closeModal} questionsData={questionsData}/>
        </QuizModal>
      </div>
    </div>
  );
}
