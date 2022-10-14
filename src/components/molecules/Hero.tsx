import styles from "./Hero.module.scss";

import Textbox from "../atoms/Textbox";
import Link from "../atoms/Link";

export type Props = {
  href: string;
};

const Hero = ({ href }: Props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.info}>
        <div className={styles.position}>
          Full-stack Developer <br /> and Aspiring Founder
        </div>
        <div className={styles.name}>Izzi Dzikri</div>
      </div>
      <div className={styles.intro}>
        Hello there, My name is Izzi Dzikri, and I'm an Indonesian developer who
        enjoys assisting others with the creation of their MVP, particularly for
        websites.
      </div>
      <div className={styles.status}>
        <Textbox label="Year of Experience" value="3" align="right" />
        <Textbox label="Education" value="Binus University" valSize="small" />
      </div>
      <div className={styles.link}>
        <Link text="Explore" href={href} />
      </div>
    </div>
  );
};

export default Hero;
