import React from "react";
import useLottie from "../../../hooks/useLottie";
// components
import { Col, Row } from "antd";
import { Fade } from "react-awesome-reveal";
import Paragraph from "../../../components/Paragraph";
import HighLight from "../../../components/HighLight";
// constants
import avatar from "../../../assets/images/avatar.jpg";
// i18n
import { Trans } from "react-i18next";
// styles
import styles from "./styles.module.scss";

const cubeLottie =
  "https://assets9.lottiefiles.com/private_files/lf30_ijlzmjq6.json";

const Profile: React.FC = () => {
  const cubeRef = useLottie(cubeLottie);

  return (
    <Row gutter={36} className={styles.profile}>
      <Col lg={{ span: 24, order: 1 }} span={24} order={3}>
        <Fade direction="up">
          <img className={styles.avatar} src={avatar} alt="头像" />
        </Fade>

        <Fade direction="up">
          <Paragraph>
            <Trans
              i18nKey="about.profile.intro"
              components={{ highlight: <HighLight /> }}
            />
          </Paragraph>
          <Paragraph>
            <Trans
              i18nKey="about.profile.undergraduate"
              components={{ highlight: <HighLight /> }}
            />
          </Paragraph>
          <Paragraph>
            <Trans
              i18nKey="about.profile.graduate"
              components={{ highlight: <HighLight /> }}
            />
          </Paragraph>
        </Fade>

        <div className={styles.lottie} ref={cubeRef} />

        <Fade direction="up">
          <Paragraph>
            <Trans i18nKey="about.profile.hobbies" />
          </Paragraph>
          <Paragraph>
            <Trans
              i18nKey="about.profile.dream"
              components={{ highlight: <HighLight /> }}
            />
          </Paragraph>
          <Paragraph>
            <Trans
              i18nKey="about.profile.career"
              components={{ highlight: <HighLight /> }}
            />
          </Paragraph>
        </Fade>
      </Col>

      {/* <Col
        lg={{ span: 7, order: 2 }}
        span={14}
        order={1}
        className={styles.avatar}
      >
        <Fade direction="up">
          <img src={avatar} alt="头像" />
        </Fade>
      </Col> */}
    </Row>
  );
};

export default Profile;
