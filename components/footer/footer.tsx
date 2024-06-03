import Image from "next/image";
import styles from "./footer.module.css";

import FooterNav from "@/components/footer/footer-nav";
import facebookIcon from "../../public/facebook.svg";
import googleIcon from "../../public/google.svg";
import twitterIcon from "../../public/twitter.svg";
import symbolIcon from "../../public/symbol.svg";

export default function Footer() {
  const product = ["popular", "trending", "guided", "products"]
  const company = ["press", "mission", "strategy", "about"]
  const info = ["support", "customer service", "get started"]

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <Image className={styles.symbol} src={symbolIcon} alt={"symbolIcon"} priority />
        <section className={styles.footerNavContainer}>
          <FooterNav data={product} title={"product"} />
          <FooterNav data={company} title={"company"} />
          <FooterNav data={info} title={"info"} />
          <div>
            <span className={styles.footerTitle}>Follow us</span>
            <div className={styles.icons}>
              <Image src={facebookIcon} alt={"facebook"} priority />
              <Image style={{marginRight: "20px", marginLeft: "20px"}} src={googleIcon} alt={"google"} priority />
              <Image src={twitterIcon} alt={"twitter"} priority />
            </div>
          </div>
        </section>
      </div>
      <div className={styles.footerCopyrightContainer}>
        <span className={styles.footerCopyrightText}>© 2021 Manual. All rights reserved</span>
      </div>
    </footer>
  )
}
