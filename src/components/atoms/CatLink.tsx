import styles from "./CatLink.module.scss";

export type Props = {
  num: number;
  text: string;
  href: string;
};

const CatLink = ({ num, text, href }: Props) => {
  return (
    <a className={styles.catLink} href={href}>
      <div className={styles.num}>{num.toString().padStart(2, "0")}</div>
      <div className={styles.text}>{text}</div>
    </a>
  );
};

export default CatLink;
