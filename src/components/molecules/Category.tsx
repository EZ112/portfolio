import CatLink, { Props as CatLinkProps } from "../atoms/CatLink";
import styles from "./Category.module.scss";

export type Props = {
  title: string;
  catList: Array<CatLinkProps & { key: string }>;
};

const Category = ({ title, catList }: Props) => {
  return (
    <div className={styles.category}>
      <div className={styles.title}>{title}</div>
      <div className={styles.list}>
        {catList.map((item) => (
          <CatLink
            key={item.key}
            num={item.num}
            text={item.text}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
