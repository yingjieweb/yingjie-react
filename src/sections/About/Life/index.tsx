import React, { useMemo } from "react";
import useTyped from "../../../hooks/useTyped";
// components
import Timeline from "../../../components/Timeline";
import TimelineHeader from "../../../components/Timeline/Header";
import TimelineItem from "../../../components/Timeline/Item";
import HighLight from "../../../components/HighLight";
// Icons
import qfnu from "../../../assets/icons/qfnu.png";
import neu from "../../../assets/icons/neu.png";
import sohu from "../../../assets/icons/sohu.png";
import fta from "../../../assets/icons/fta.png";
import ammo from "../../../assets/icons/ammo.jpeg";
// i18n
import { useTranslation } from "react-i18next";
// styles
import styles from "./styles.module.scss";

const Life: React.FC = () => {
  const { t } = useTranslation();
  const strings = useMemo(
    () => t("timeline.roles", { returnObjects: true }) as string[],
    [t]
  );
  const el = useTyped(strings, { loop: true });

  return (
    <Timeline>
      <TimelineHeader>1995</TimelineHeader>
      <TimelineItem
        direction="right"
        time={t("timeline.month.september")}
        header="👶🏻"
      />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem header={t("timeline.study")} />
      <TimelineHeader>2018</TimelineHeader>
      <TimelineItem
        direction="right"
        time={t("timeline.month.june")}
        header={[t("timeline.bachelorGraduation")]}
        node={
          <span className={styles.customNode}>
            <img width={46} src={qfnu} alt="qfnu" />
          </span>
        }
        content={[
          t("timeline.jining"),
          <span>
            <HighLight>{t("timeline.qfnu")}</HighLight> @{" "}
            {t("timeline.softwareEngineering")}
          </span>,
          t("timeline.codingJourney"),
        ]}
      />
      <TimelineItem
        time={t("timeline.month.september")}
        node={
          <span className={styles.customNode}>
            <img width={72} src={neu} alt="neu" />
          </span>
        }
        header={[
          t("timeline.shenyang"),
          <span>
            {t("timeline.graduateAdmission")}{" "}
            <HighLight>{t("timeline.neu")}</HighLight>
          </span>,
        ]}
        content={[t("timeline.graduateStudy")]}
      />
      <TimelineHeader>2021</TimelineHeader>
      <TimelineItem
        direction="right"
        time={t("timeline.month.june")}
        header={[t("timeline.masterGraduation")]}
        content={[t("timeline.lab")]}
      />
      <TimelineItem
        time={t("timeline.month.july")}
        node={
          <span className={styles.customNode}>
            <img width={70} src={sohu} alt="sohu" />
          </span>
        }
        header={[
          t("timeline.beijing"),
          <span className={styles.position}>
            {t("timeline.joined")} <HighLight>{t("timeline.sohu")}</HighLight>{" "}
            🦊
            <span className={styles.typed} />
          </span>,
        ]}
      />
      <TimelineHeader>2023</TimelineHeader>
      <TimelineItem
        direction="right"
        time={t("timeline.month.september")}
        node={
          <span className={styles.customNode}>
            <img width={70} src={fta} alt="FTA" />
          </span>
        }
        header={[
          t("timeline.nanjing"),
          <span className={styles.position}>
            {t("timeline.joined")} <HighLight>{t("timeline.fta")}</HighLight> 🚚
          </span>,
        ]}
        content={[t("timeline.reunion")]}
      />
      <TimelineHeader>2025</TimelineHeader>
      <TimelineItem
        time={t("timeline.month.march")}
        node={
          <span className={styles.customNode}>
            <img className={styles.ammoLogo} width={48} src={ammo} alt="AMMO" />
          </span>
        }
        header={[
          t("timeline.newChapter"),
          <span className={styles.position} key="ammo">
            {t("timeline.startedBuilding")}{" "}
            <HighLight>{t("timeline.ammo")}</HighLight>{" "}
            {t("timeline.entrepreneurship")}
            <span className={styles.typed} ref={el} />
          </span>,
        ]}
        content={[t("timeline.fullStack"), t("timeline.aiAgent")]}
      />
      <TimelineHeader>🤔...</TimelineHeader>
    </Timeline>
  );
};

export default Life;
