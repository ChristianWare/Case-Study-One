"use client";

import styles from "./PageIntro.module.css";
import { PageIntroProps } from "../../lib/interface";
import { FC } from "react";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Image from "next/image";
import Asset from "../../public/icons/asset.svg";

const PageIntro: FC<PageIntroProps> = ({ heading, copy, src }) => {
  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <Image src={src} alt='hero' fill className={styles.img} priority />
        <div className={styles.imgOverlay}></div>
        <LayoutWrapper>
          <ContentPadding>
            <div className={styles.content}>
              <motion.h1
                variants={fadeIn("", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.heading}
                lang='en'
              >
                {heading}
              </motion.h1>
            </div>
          </ContentPadding>
        </LayoutWrapper>
      </div>
    </section>
  );
};
export default PageIntro;
