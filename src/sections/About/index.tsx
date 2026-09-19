import React from "react";
// common comps
import Title from "../../components/Title";
// import Button from "../../components/Button";
// components
import Profile from "./Profile";
import Life from "./Life";
import { Fade } from "react-awesome-reveal";
import Paragraph from "../../components/Paragraph";
import Section from "../../components/Section";
import HighLight from "../../components/HighLight";
// i18n
import { useTranslation } from "react-i18next";
// styles
import styles from "./styles.module.scss";

// const resumeUrl = "https://github.yingjieweb.com/resume";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" className={styles.about}>
      <Title tag="h2">{t("about.title")}</Title>

      <Title tag="h3">{t("about.subtitle")}</Title>

      <Profile />

      <Life />

      <Fade direction="up">
        <Paragraph className={styles.goal}>
          {t("about.goal.prefix")} <HighLight>{t("about.goal.code")}</HighLight>
          {t("about.goal.middle")}
          <br />
          {t("about.goal.suffix")} 👉{" "}
          <span className={styles.justForFun}>Just for fun ~</span>
        </Paragraph>
      </Fade>

      {/* <Fade direction="up">
      <div>
        <Button
          onClick={() => window.open(resumeUrl, "_blank")}
          className={styles.pulse}
        >
          我的简历
        </Button>
      </div>
    </Fade> */}
    </Section>
  );
};

export default About;
