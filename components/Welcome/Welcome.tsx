"use client";

import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Welcome.module.css";
import Wave from "../../public/icons/wave.svg";
import ContentPadding from "../ContentPadding/ContentPadding";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";

export default function Welcome() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <motion.div
            variants={fadeIn("", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.content}
          >
            <SectionHeading title='welome' color='blue' />
            <h2 className={styles.heading}>
              Indulge in our exquisite accommodations and services
            </h2>
            <Wave className={styles.wave} />
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur. Id facilisis velit velit
              vitae id malesuada sem feugiat sit. Nisi ipsum suspendisse.
            </p>
          </motion.div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
}
