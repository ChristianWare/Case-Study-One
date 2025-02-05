"use client";

import styles from "./PageIntro.module.css";
import { PageIntroProps } from "../../lib/interface";
import { FC } from "react";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Image from "next/image";

const PageIntro: FC<PageIntroProps> = ({ heading, copy, src }) => {
  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <Image
          src={src}
          alt='hero'
          fill
          className={styles.img}
          priority
          // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw'
        />
        <div className={styles.imgOverlay}></div>
        <LayoutWrapper>
          <ContentPadding>
            <div className={styles.content}>
              <motion.div
                variants={fadeIn("", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.contentChildren}
              >
                <h1 className={styles.heading} lang='en'>
                  {heading}
                </h1>
                {/* <Wave className={styles.wave} /> */}
              </motion.div>
            </div>
          </ContentPadding>
        </LayoutWrapper>
      </div>
    </section>
  );
};
export default PageIntro;
