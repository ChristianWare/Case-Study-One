"use client";

import styles from "./PageIntroii.module.css";
import { PageIntroProps } from "../../lib/interface";
import { FC } from "react";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Image from "next/image";
import Asset from "../../public/icons/asset.svg";
import Wave from "../../public/icons/wave.svg";

export default function PageIntroii({ heading, copy }: PageIntroProps) {
  return (
    <section className={styles.container}>
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
            <Wave className={styles.wave} />
            <p className={styles.copy}>{copy} </p>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
}
