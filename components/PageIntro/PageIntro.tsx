import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./PageIntro.module.css";
import { PageIntroProps } from "../../lib/interface";
import { FC } from "react";

const PageIntro: FC<PageIntroProps> = ({ heading, copy }) => {
  return (
    <div className={styles.top}>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.copy}>{copy}</p>
    </div>
  );
};
export default PageIntro;
