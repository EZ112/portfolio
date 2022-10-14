import Hero, { Props as HeroProps } from "../molecules/Hero";
import styles from "./HeroSection.module.scss";

export interface Props extends HeroProps {}

const HeroSection = ({ href }: Props) => {
  return (
    <section className={styles.heroSection}>
      <Hero href={href} />
    </section>
  );
};

export default HeroSection;
