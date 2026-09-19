import { Image } from "antd";
import { ProjectItem } from "./Item";
// i18n
import { TFunction } from "i18next";

// links
import link from "../../assets/svgs/link.svg";
import github from "../../assets/svgs/github.svg";
import juejin from "../../assets/svgs/juejin.svg";
import csdn from "../../assets/icons/csdn.png";

// technology stack
import css from "../../assets/icons/css.png";
import scss from "../../assets/icons/sass.png";
import js from "../../assets/icons/js.png";
import ts from "../../assets/icons/ts.png";
import jQuery from "../../assets/icons/jquery.png";
import vue from "../../assets/icons/vue.png";
import react from "../../assets/icons/react.png";
import styledComponents from "../../assets/icons/styled-components.png";
import npm from "../../assets/icons/npm.png";
import babel from "../../assets/icons/babel.png";
import webpack from "../../assets/icons/webpack.png";
import antd from "../../assets/icons/antd.png";
import element from "../../assets/icons/element.png";
import echarts from "../../assets/icons/echarts.png";
import karma from "../../assets/icons/karma.png";
import mocha from "../../assets/icons/mocha.png";
import sinon from "../../assets/icons/sinon.png";
import travis from "../../assets/icons/travis.webp";
// import jest from "../../assets/icons/jest.png";
// import hljs from "../../assets/icons/hljs.png";
// import python from "../../assets/icons/python.png";
// import eslint from "../../assets/icons/eslint.png";

// league-ui
import leagueoflegendsLogo from "../../assets/icons/lol-logo.png";
import leagueoflegendsUI from "../../assets/screenshots/lol-ui.jpg";

// campus
import campusUI from "../../assets/screenshots/campus.gif";

// navigator
import navigatorUI from "../../assets/screenshots/navigator.png";

// charge
import chargeUI from "../../assets/screenshots/charge.png";

// sunshine
import sunshineUI from "../../assets/screenshots/sunshine.gif";

// dombox
import domboxUI from "../../assets/screenshots/dombox.png";

// amap-optimization-demo
import amapOptimizationDemoUI from "../../assets/screenshots/amapOptimizationDemo.png";

// Dnd-draggable-tree-demo
import dndDraggableTreeDemoUI from "../../assets/screenshots/dndDraggableTreeDemo.gif";

// RBAC-checkbox-tree-demo
import rbacCheckboxTreeDemoUI from "../../assets/screenshots/rbacCheckboxTreeDemo.gif";

// 可视项目
export const getProjects = (t: TFunction): ProjectItem[] => [
  {
    id: "amap",
    logoFont: "🌏",
    title: t("projects.items.amap.title"),
    content: <Image src={amapOptimizationDemoUI} />,
    description: <p>{t("projects.items.amap.description")}</p>,
    links: [
      {
        content: "https://yingjieweb.github.io/amap-optimization-demo/",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/amap-optimization-demo",
        image: github,
      },
      {
        content:
          "https://blog.csdn.net/Marker__/article/details/124321573?spm=1001.2014.3001.5501",
        image: csdn,
      },
    ],
    techUsed: [
      { content: "Vue.js", image: vue },
      { content: "Sass", image: scss },
    ],
  },
  {
    id: "league",
    logo: leagueoflegendsLogo,
    title: t("projects.items.league.title"),
    content: <Image src={leagueoflegendsUI} />,
    description: <p>{t("projects.items.league.description")}</p>,
    links: [
      {
        content: "https://yingjieweb.github.io/league-ui-doc/#/intro",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/league-ui",
        image: github,
      },
    ],
    techUsed: [
      { content: "Vue.js", image: vue },
      { content: "Sass", image: scss },
      { content: "JavaScript", image: js },
      { content: "NPM", image: npm },
      { content: "Babel", image: babel },
      { content: "Webpack", image: webpack },
      { content: "Karma", image: karma },
      { content: "Sinon", image: sinon },
      { content: "Mocha", image: mocha },
      { content: "Travis CI", image: travis },
    ],
  },
  {
    id: "campus",
    logoFont: "🎓",
    title: t("projects.items.campus.title"),
    content: <Image src={campusUI} />,
    description: <p>{t("projects.items.campus.description")}</p>,
    links: [
      {
        content: "https://yingjieweb.github.io/campus/#/campus-recruit",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/campus",
        image: github,
      },
    ],
    techUsed: [
      { content: "Vue.js", image: vue },
      { content: "Sass", image: scss },
      { content: "Element UI", image: element },
      { content: "Apache ECharts", image: echarts },
    ],
  },
  {
    id: "navigator",
    logoFont: "📡",
    title: t("projects.items.navigator.title"),
    content: <Image src={navigatorUI} />,
    description: <p>{t("projects.items.navigator.description")}</p>,
    links: [
      {
        content: "https://yingjieweb.github.io/navigator/",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/navigator",
        image: github,
      },
      {
        content: "https://juejin.cn/post/7246747232997474360",
        image: juejin,
      },
    ],
    techUsed: [
      { content: "jQuery", image: jQuery },
      { content: "CSS", image: css },
    ],
  },
  {
    id: "charge",
    logoFont: "📒",
    title: t("projects.items.charge.title"),
    content: <Image src={chargeUI} />,
    description: <p>{t("projects.items.charge.description")}</p>,
    links: [
      {
        content: "https://yingjieweb.github.io/charge/#/money",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/charge2",
        image: github,
      },
    ],
    techUsed: [
      { content: "React.js", image: react },
      { content: "TypeScript", image: ts },
      { content: "Styled-Components", image: styledComponents },
      { content: "Apache ECharts", image: echarts },
      { content: "Babel", image: babel },
      { content: "Webpack", image: webpack },
    ],
  },
  {
    id: "dnd",
    logoFont: "👆",
    title: t("projects.items.dnd.title"),
    content: <Image src={dndDraggableTreeDemoUI} />,
    description: <p>{t("projects.items.dnd.description")}</p>,
    links: [
      {
        content: "https://yingjieweb.github.io/dnd-draggable-tree-demo/",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/dnd-draggable-tree-demo",
        image: github,
      },
    ],
    techUsed: [
      { content: "React.js", image: react },
      { content: "Sass", image: scss },
      { content: "Ant Design", image: antd },
    ],
  },
  {
    id: "rbac",
    logoFont: "🧷",
    title: t("projects.items.rbac.title"),
    content: <Image src={rbacCheckboxTreeDemoUI} />,
    description: <p>{t("projects.items.rbac.description")}</p>,
    links: [
      {
        content: "https://yingjieweb.github.io/RBAC-checkbox-tree-demo/",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/RBAC-checkbox-tree-demo",
        image: github,
      },
    ],
    techUsed: [
      { content: "React.js", image: react },
      { content: "Sass", image: scss },
      { content: "Ant Design", image: antd },
    ],
  },
  {
    id: "dombox",
    logoFont: "🌲",
    title: t("projects.items.dombox.title"),
    content: <Image src={domboxUI} />,
    description: <p>{t("projects.items.dombox.description")}</p>,
    links: [
      {
        content: "https://github.com/yingjieweb/dombox",
        image: github,
      },
    ],
    techUsed: [{ content: "JavaScript", image: js }],
  },
  {
    id: "sunshine",
    logoFont: "✨",
    title: t("projects.items.sunshine.title"),
    content: <Image src={sunshineUI} />,
    description: <p>{t("projects.items.sunshine.description")}</p>,
    links: [
      {
        content: "https://yingjieweb.github.io/sunshine/#/hypnosis-circle",
        image: link,
      },
      {
        content: "https://github.com/yingjieweb/sunshine",
        image: github,
      },
    ],
    techUsed: [
      { content: "JavaScript", image: js },
      { content: "CSS", image: css },
    ],
  },
];
