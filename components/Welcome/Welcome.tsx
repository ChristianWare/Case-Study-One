"use client";

import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Welcome.module.css";
import Wave from "../../public/icons/wave.svg";
import ContentPadding from "../ContentPadding/ContentPadding";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Button from "../Button/Button";

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
              Discover the allure of Arizona with Elite Retreat Rentals! Based
              in vibrant Phoenix, we offer affordable lodging across multiple
              properties, ensuring an unforgettable stay.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/properties' text='Book Now' btnType='primary' />
            </div>
          </motion.div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
}
