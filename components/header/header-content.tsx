"use client";

import Image from "next/image";
import { useState } from "react";

// components
import Quiz from "@/components/quiz/quiz";
import QuizModal from "@/components/quiz/modal/modal";

// image
import heroImage from "@/public/hero.png";

// props
import { QuestionsProps } from "@/components/props";

import styles from "./header-content.module.css";

type HeaderContentProps = {
  questionsData: QuestionsProps
}

export default function HeaderContent({questionsData}: HeaderContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.headerContent}>
      <Image src={heroImage} alt={"header image"} priority fill />
      <div className={styles.container}>
        <span className={styles.headerTitle} >Be good {'\n'}to yourself</span>
        <p className={styles.headerDescription}>We’re working around the clock to bring you a holistic{'\n'} approach to your wellness. From top to bottom, inside and{'\n'} out.</p>
        <button className={styles.takeTheQuizButton} onClick={openModal}>Take the quiz</button>
        <QuizModal isOpen={isModalOpen}>
          <Quiz onClose={closeModal} questionsData={questionsData}/>
        </QuizModal>
      </div>
    </div>
  )
}