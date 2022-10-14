import styles from "./Navbar.module.scss";
import Link, { Props as LinkProps } from "../atoms/Link";

export type Props = {
  navList: Array<LinkProps & { key: string }>;
};

const Navbar = ({ navList }: Props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>EZ</div>
      <div className={styles.links}>
        {navList.map((item) => (
          <Link
            key={item.key}
            text={item.text}
            href={item.href}
            variant="secondary"
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
