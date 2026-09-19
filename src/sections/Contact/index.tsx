import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
// components
import { Fade } from "react-awesome-reveal";
import Section from "../../components/Section";
import Title from "../../components/Title";
// utils
import emailjs from "@emailjs/browser";
import { detectMobile } from "../../utils";
// constants
import { contacts } from "./constants";
import { EMAILJS_CONFIG } from "../../config/emailjs";
// i18n
import { useTranslation } from "react-i18next";
// styles
import styles from "./styles.module.scss";

const isMobile = detectMobile();

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

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
      .catch(() => {
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
      <Fade direction="up">
        <div className={styles.container}>
          <Title tag="h2">{t("contact.title")}</Title>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              name="name"
              rules={[
                { required: true, message: t("contact.form.name.required") },
              ]}
            >
              <Input placeholder={t("contact.form.name.placeholder")} />
            </Form.Item>
            <Form.Item
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
              name="message"
              rules={[
                { required: true, message: t("contact.form.message.required") },
              ]}
            >
              <Input.TextArea
                placeholder={t("contact.form.message.placeholder")}
                rows={4}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={isLoading}
                disabled={isLoading}
              >
                {t("contact.form.submit")}
              </Button>
            </Form.Item>
          </Form>

          <ul className={styles.contactList}>
            {contacts.map((contact) => (
              <li key={contact.image}>
                <a href={contact.url} target="_blank" rel="noreferrer">
                  <img src={contact.image} alt="contactImage" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Fade>
    </Section>
  );
};

export default Contact;
