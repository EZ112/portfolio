import Category from "../molecules/Category";
import styles from "./ProjectSection.module.scss";

const ProjectSection = () => {
  const ProjectList = [
    {
      key: "project-1",
      title: "React.js",
      catList: [
        {
          key: "cat-1",
          num: 1,
          text: "Card",
          href: "#",
        },
        {
          key: "cat-2",
          num: 2,
          text: "Forms",
          href: "#",
        },
      ],
    },
    {
      key: "project-2",
      title: "Python",
      catList: [
        {
          key: "cat-3",
          num: 1,
          text: "Handwritten Classification",
          href: "#",
        },
      ],
    },
  ];

  return (
    <section className={styles.projectSection}>
      <div className={styles.title}>Project</div>
      <div className={styles.projectList}>
        {ProjectList.map((item) => (
          <Category key={item.key} title={item.title} catList={item.catList} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
