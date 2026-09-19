import React, { useMemo } from "react";
import useTyped from "../../hooks/useTyped";
import useLottie from "../../hooks/useLottie";
// components
import { Col, Row } from "antd";
import { Fade } from "react-awesome-reveal";
// constants
import dragonLottieData from "../../assets/lottie/dragon.json";
import arrowLottieData from "../../assets/lottie/arrow.json";
// i18n
import { useTranslation } from "react-i18next";
// styles
import styles from "./styles.module.scss";

const ammoUrl = "https://www.linkedin.com/company/ammo-ai/";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const strings = useMemo(
    () => [t("home.typed.tech"), t("home.typed.blog"), t("home.typed.sports")],
    [t]
  );
  const typedElement = useTyped(strings, { loop: true });
  const dragonLottieRef = useLottie(dragonLottieData);
  const arrowDownLottieRef = useLottie(arrowLottieData);

  const next = () => {
    const $about = document.querySelector("#about");
    if ($about) {
      $about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <p>{t("home.greeting")}</p>
          <p>{t("home.role")}</p>
          <p>
            {t("home.workingPrefix")}{" "}
            <a
              className={styles.ammo}
              href={ammoUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t("home.company")}
            </a>{" "}
            {t("home.workingSuffix")}
          </p>
          <p>{t("home.aiFocus")}</p>
          <p>
            ✍ <span className={styles.python}> Python </span>
            {" · "}
            <span className={styles.next}> Next.js </span>
            {" · "}
            <span className={styles.react}> React </span>
            {" · "}
            <span className={styles.vue}> Vue</span>
            {t("punctuation.comma")}
          </p>
          <p>
            {t("home.sometimes")}
            <span className={styles.sometime} ref={typedElement} />
          </p>
        </Col>

        <Col span={24} md={9} className={styles.avatarWrapper}>
          <Fade direction="up">
            <div className={styles.avatar}>
              <div ref={dragonLottieRef} />
            </div>
          </Fade>
        </Col>
      </Row>

      <div className={styles.arrowWrapper}>
        <Fade direction="up">
          <div className={styles.arrow}>
            <div ref={arrowDownLottieRef} onClick={next} />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Home;
