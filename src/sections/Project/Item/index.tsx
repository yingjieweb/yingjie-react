import React, { ReactNode } from "react";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "antd";
// i18n
import { useTranslation } from "react-i18next";
// styles
import styles from "./styles.module.scss";

interface Image {
  image: string;
  content: string;
}

export type ProjectItem = {
  id: string;
  logo?: string;
  logoFont?: string;
  title?: string | ReactNode;
  badges?: string[];
  content?: string | ReactNode;
  description?: string | ReactNode;
  links?: Image[];
  techUsed?: Image[];
};

const getLinkLabel = (url: string) => {
  if (url.includes("github.com")) return "GitHub";
  if (url.includes("juejin.cn")) return "Juejin";
  if (url.includes("csdn.net")) return "CSDN";
  return "Live preview";
};

const Item: React.FC<ProjectItem> = (props) => {
  const { t } = useTranslation();
  const {
    logo,
    logoFont,
    title,
    badges,
    content,
    description,
    links,
    techUsed,
  } = props;

  return (
    <div className={styles.item}>
      <Fade>
        <div className={styles.container}>
          {logo && (
            <img
              className={styles.logo}
              src={logo}
              alt={typeof title === "string" ? `${title} logo` : "Project logo"}
            />
          )}
          {logoFont && <div className={styles.logoFont}>{logoFont}</div>}

          {title && <h4 className={styles.title}>{title}</h4>}

          {badges && (
            <div className={styles.badges}>
              {badges.map((badge) => (
                <img key={badge} src={badge} alt="badge" />
              ))}
            </div>
          )}

          {content && <div className={styles.content}>{content}</div>}

          {description && (
            <div className={styles.description}>{description}</div>
          )}

          {links && (
            <div className={styles.links}>
              {links.map((link) => (
                <a
                  key={link.content}
                  href={link.content}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={getLinkLabel(link.content)}
                >
                  <img src={link.image} alt="" />
                </a>
              ))}
            </div>
          )}

          {techUsed && (
            <div className={styles.techUsed}>
              <h4>{t("projects.techStack")}</h4>
              <ul>
                {techUsed.map((tech, index) => (
                  <li
                    key={tech.content}
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    <Tooltip placement="top" title={tech.content} color="black">
                      <img src={tech.image} alt={tech.content} />
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default Item;
