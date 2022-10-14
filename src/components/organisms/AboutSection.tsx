import ImageStory from "../atoms/ImageStory";
import { img_1, img_2 } from "../../assets";
import styles from "./AboutSection.module.scss";

export type Props = {
  id: string;
};

const AboutSection = ({ id }: Props) => {
  return (
    <section id={id} className={styles.aboutSection}>
      <div className={styles.content}>
        <ImageStory
          image={img_1}
          story={
            <>
              “A Legendary hero is usually the founder of something - the
              founder of new age, the founder of a new religion, the founder of
              a new city, the founder of a new way of life.
              <br />
              In order to found Something new, one has to leave old and go on a
              quest of the seed idea, a germinal idea that will have the
              potential of bring forth that new thing”
            </>
          }
          author="Joseph Campbell, The hero with a Thousand Faces"
        />
        <ImageStory
          image={img_2}
          story={
            <>
              When I strive to build on something, I always have the notion that
              doing so is a noble endeavor that we would partake in to find a
              better way of living.
              <br />
              In terms of starting a business, we are looking for something that
              the majority of people will find valuable. This also became the
              rationale behind our MVP experimentation. To determine whether our
              small prototype is useful or not.
            </>
          }
          align="right"
          orient="landscape"
        />
      </div>
    </section>
  );
};

export default AboutSection;
