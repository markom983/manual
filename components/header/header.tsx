import Image from "next/image";

import symbolIcon from "../../public/symbol.svg";

import HeaderContent from "@/components/header/header-content";
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
