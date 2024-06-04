// component
import CardComponent from "@/components/card/card";

import styles from "./page.module.css";

export default function Home() {
  const data = [
    {
      id: 1,
      small_title: "Hair loss",
      title: "Hair loss needn’t be irreversible. We can help!",
      description: "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
      image_url: "/hair.png",
      image_position: "left"
    },
    {
      id: 2,
      small_title: "Erecetile dysfunction",
      title: "Erections can be a tricky thing. But no need to feel down!",
      description: "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
      image_url: "/photo.png",
      image_position: "right"
    }
  ]

  return (
    <main className={styles.main}>
      <span className={styles.mainTitle}>What we can help with</span>
      <div className={styles.mainContent}>
        {data.map(card => {
          return (
            <CardComponent
              key={card.id}
              id={card.id}
              image_position={card.image_position}
              image_url={card.image_url}
              title={card.title}
              small_title={card.small_title}
              description={card.description}
            />
          )
        })}
      </div>
    </main>
  );
}
