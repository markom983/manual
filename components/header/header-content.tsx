"use client";

import Image from "next/image";
import heroImage from "@/public/hero.png";
import { Questions } from "@/components/props";
import styles from "./header-content.module.css";

type HeaderContentProps = {
  questionsData: Questions
}

export default function HeaderContent({questionsData}: HeaderContentProps) {
  return (
    <div className={styles.headerContent}>
      <Image src={heroImage} alt={"header image"} priority fill />
      <div className={styles.container}>
        <span className={styles.headerTitle} >Be good {'\n'}to yourself</span>
        <p className={styles.headerDescription}>We’re working around the clock to bring you a holistic{'\n'} approach to your wellness. From top to bottom, inside and{'\n'} out.</p>
        <button className={styles.takeTheQuizButton}>Take the quiz</button>
      </div>
    </div>
  )
}
