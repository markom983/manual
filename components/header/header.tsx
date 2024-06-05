import Image from "next/image";

// actions
import { getQuestions } from "@/lib/actions";

// components
import HeaderContent from "@/components/header/header-content";

// image
import heroImage from "@/public/hero.png";

import styles from "./header.module.css";

export default async function Header() {
  const questionsData = await getQuestions();

  return (
    <header className={styles.headerContainer}>
      <Image src={heroImage} alt={"header image"} priority fill style={{maxHeight: "750px"}}/>
      <HeaderContent questionsData={questionsData}/>
    </header>
  );
}
