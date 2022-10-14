import styles from "./Link.module.scss";

export type Props = {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
};

const Link = ({ text, href, variant = "primary" }: Props) => {
  return (
    <a className={`${styles.link} ${styles[variant]}`} href={href}>
      {text}
      {variant == "primary" && <div className={styles.arrow}></div>}
    </a>
  );
};

export default Link;
