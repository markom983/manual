import styles from "@/components/footer/footer.module.css";

type FooterNavProps = {
  data: string[];
  title: string;
}

export default function FooterNav({data, title}:FooterNavProps) {
  return (
    <div>
      <span className={styles.footerTitle}>{title}</span>
      <nav className={styles.footerNavLinks}>
        <ul>
          {data.map((link, index) => {
            return <li key={index}>{link}</li>
          })}
        </ul>
      </nav>
    </div>
  )
}
