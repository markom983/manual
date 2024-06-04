import Image from "next/image";

// icons
import symbolIcon from "../../public/symbol.svg";

// components
import HeaderContent from "@/components/header/header-content";

// actions
import { getQuestions } from "@/lib/actions";

import styles from "./header.module.css";

export default async function Header() {
  const questionsData = await getQuestions();

  return (
    <header className={styles.headerContainer}>
      <Image src={symbolIcon} alt={"symbol icon"} priority className={styles.headerSymbolIcon} height={40} width={40}/>
      <HeaderContent questionsData={questionsData}/>
    </header>
  )
}