import Image from "next/image";

import styles from "./card.module.css";

type CardProps = {
  id: number;
  image_position: string;
  image_url: string;
  small_title: string;
  title: string;
  description: string;
}

export default function CardComponent({
  id,
  image_position,
  image_url,
  small_title,
  title,
  description
}:CardProps) {
  return (
    <div key={id} className={styles.cardContainer} style={{ flexDirection: `${image_position === "left" ? "row" : "row-reverse"}`}}>
      <span
        className={styles.cardBackgroundText}
        style={{ marginLeft: `${image_position === "left" ? "280px" : 0}`, marginRight: `${image_position === "left" ? 0 : "280px"}`}}
      >0{id}</span>
      <Image
        src={image_url}
        alt={"some text"}
        width={370}
        height={445}
        className={styles.cardImage}
        style={{ marginLeft: `${image_position === "left" ? 0 : "123px"}`, marginRight: `${image_position === "left" ? "123px" : 0}`}}
      />
      <div className={styles.cardDescriptionContainer}>
        <span className={styles.cardSmallTitle}>{small_title}</span>
        <span key={id} className={styles.cardTitle}>{title}</span>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}
