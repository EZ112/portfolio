import styles from "./Button.module.scss";

export type Props = {
  text: string;
  variant?: "primary" | "secondary";
};

const Button = ({ text, variant = "primary" }: Props) => {
  return (
    <button className={`${styles.button} ${styles[`${variant}`]}`}>
      {text}
    </button>
  );
};

export default Button;
