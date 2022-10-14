import styles from "./Textbox.module.scss";

export type Props = {
  label: string;
  value: string;
  align?: "left" | "right";
  valSize?: "big" | "small";
};

const Textbox = ({ label, value, align = "left", valSize = "big" }: Props) => {
  return (
    <div className={`${styles.textbox} ${styles[align]}`}>
      <div className={styles.label}>{label}</div>
      <div className={`${styles.value} ${styles[valSize]}`}>{value}</div>
    </div>
  );
};

export default Textbox;
