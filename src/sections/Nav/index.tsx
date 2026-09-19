import React, { useEffect, useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import classNames from "classnames";
// constants
import { navItems } from "./constants";
// i18n
import { useTranslation } from "react-i18next";
// styles
import styles from "./styles.module.scss";

export interface NavItem {
  text: string;
  targetEl: string;
}

const Nav: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeItem, setActiveItem] = useState<string>("#home");
  const [verticalNavVisible, setVerticalNavVisible] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.lang =
      i18n.resolvedLanguage === "en" ? "en" : "zh-CN";
    document.title = t("meta.title");
  }, [i18n.resolvedLanguage, t]);

  const scrollTo = (targetEl: string) => {
    const $targetEl = document.querySelector(targetEl);
    if ($targetEl) {
      setActiveItem(targetEl);
      $targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>Yingjieweb</div>

      <ul className={styles.horizontalNav}>
        {navItems.map((nav) => (
          <li
            key={nav.targetEl}
            className={classNames({
              [styles.active]: nav.targetEl === activeItem,
            })}
            onClick={() => {
              scrollTo(nav.targetEl);
              // @ts-ignore
              _hmt.push(["_trackEvent", "navigator", "click", nav.targetEl]);
            }}
          >
            {t(nav.text)}
          </li>
        ))}
        <li
          className={styles.languageBtn}
          onClick={() =>
            i18n.changeLanguage(i18n.resolvedLanguage === "zh" ? "en" : "zh")
          }
          aria-label={t("language.switch")}
        >
          {i18n.resolvedLanguage === "zh" ? "EN" : "中"}
        </li>
        {/* <li
          onClick={() => {
            window.open("");
          }}
        >
          简历
        </li> */}
        <li
          className={styles.navBtn}
          onClick={() => setVerticalNavVisible(!verticalNavVisible)}
        >
          {verticalNavVisible ? <CloseOutlined /> : <MenuOutlined />}
        </li>
      </ul>

      {verticalNavVisible && (
        <ul className={styles.verticalNav}>
          {navItems.map((nav) => (
            <li
              key={nav.targetEl}
              className={classNames({
                [styles.active]: nav.targetEl === activeItem,
              })}
              onClick={() => {
                setVerticalNavVisible(false);
                scrollTo(nav.targetEl);
              }}
            >
              {t(nav.text)}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
