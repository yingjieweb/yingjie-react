import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import useLottie from "../../hooks/useLottie";
// components
import Section from "../../components/Section";
// utils
import emailjs from "@emailjs/browser";
import { detectMobile } from "../../utils";
// constants
import { contacts } from "./constants";
import { EMAILJS_CONFIG } from "../../config/emailjs";
import dragonLottieData from "../../assets/lottie/dragon.json";
// i18n
import { useTranslation } from "react-i18next";
// styles
import styles from "./styles.module.scss";

const isMobile = detectMobile();

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const dragonLottieRef = useLottie(dragonLottieData);

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const onFinish = (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    const dataToSend = { ...values, reply_to: values.email };
    setIsLoading(true);
    emailjs
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        dataToSend,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(() => {
        message.success(t("contact.messages.success"));
        form.resetFields();
      })
      .catch((error) => {
        console.error("EmailJS send failed:", error);
        message.error(t("contact.messages.error"));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Section
      id="contact"
      className={styles.contact}
      style={{ backgroundAttachment: isMobile ? "initial" : "fixed" }}
    >
      <div className={styles.shell}>
        <div className={styles.formPanel}>
          <h2>{t("contact.title")}</h2>
          <p className={styles.subtitle}>{t("contact.subtitle")}</p>

          <Form
            className={styles.form}
            form={form}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label={t("contact.form.name.label")}
              name="name"
              rules={[
                { required: true, message: t("contact.form.name.required") },
              ]}
            >
              <Input placeholder={t("contact.form.name.placeholder")} />
            </Form.Item>
            <Form.Item
              label={t("contact.form.email.label")}
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: t("contact.form.email.required"),
                },
              ]}
            >
              <Input placeholder={t("contact.form.email.placeholder")} />
            </Form.Item>
            <Form.Item
              label={t("contact.form.message.label")}
              name="message"
              rules={[
                {
                  required: true,
                  message: t("contact.form.message.required"),
                },
              ]}
            >
              <Input.TextArea
                placeholder={t("contact.form.message.placeholder")}
                rows={4}
              />
            </Form.Item>
            <Form.Item className={styles.submitItem}>
              <Button
                className={styles.submit}
                htmlType="submit"
                loading={isLoading}
                disabled={isLoading}
              >
                {t("contact.form.submit")}
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className={styles.infoPanel}>
          <div className={styles.speechBubble}>{t("contact.panelTitle")}</div>
          <div className={styles.dragon} ref={dragonLottieRef} />
          <p className={styles.description}>
            <span>{t("contact.panelDescription.line1")}</span>
            <span>{t("contact.panelDescription.line2")}</span>
          </p>
          <p className={styles.socialTitle}>{t("contact.socialTitle")}</p>
          <ul className={styles.contactList}>
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={contact.label}
                  title={contact.label}
                >
                  <img src={contact.image} alt="" />
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.footer}>{t("contact.footer")}</p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
