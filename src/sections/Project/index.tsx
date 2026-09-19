import React from "react";
// components
import Masonry from "react-masonry-css";
import Title from "../../components/Title";
import Section from "../../components/Section";
import Item from "./Item";
// constants
import { getProjects } from "./constants";
// i18n
import { useTranslation } from "react-i18next";
// styles
import styles from "./styles.module.scss";

const Project: React.FC = () => {
  const { t } = useTranslation();
  const projects = getProjects(t);

  return (
    <Section id="project" className={styles.project}>
      <Title tag="h2">{t("projects.title")}</Title>
      <Title tag="h3">{t("projects.subtitle")}</Title>

      <Masonry
        className={styles.projectList}
        columnClassName={styles.projectListColumn}
        breakpointCols={{ default: 3, 992: 2, 786: 1 }}
      >
        {projects.map((project) => (
          <Item {...project} key={project.logo} />
        ))}
      </Masonry>

      <Title className={styles.footerTitle} tag="h3">
        {t("projects.more")}
      </Title>
    </Section>
  );
};

export default Project;
