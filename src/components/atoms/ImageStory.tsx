import styles from "./ImageStory.module.scss";

export type Props = {
  image: string;
  story: JSX.Element;
  author?: string;
  align?: "left" | "right";
  orient?: "potrait" | "landscape";
};

const ImageStory = ({
  image,
  story,
  author,
  align = "left",
  orient = "potrait",
}: Props) => {
  return (
    <div className={`${styles.imageStory} ${styles[align]}`}>
      <img className={`${styles.image} ${styles[orient]}`} src={image} />
      <div className={styles.story}>
        <p>{story}</p>
        {author && <span className={styles.author}>-{author}</span>}
      </div>
    </div>
  );
};

export default ImageStory;
