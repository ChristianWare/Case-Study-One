"use client";

import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Location.module.css";
import Image from "next/image";
import Grand from "../../public/images/grand.jpg";
import Wave from "../../public/icons/wave.svg";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Marquee from "../Marquee/Marquee";

export default function Location() {
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
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image
                  src={Grand}
                  title='image'
                  alt='image'
                  fill
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.right}>
              <SectionHeading title='LOCATION' color='white' />
              <h2 className={styles.heading}>
                Nestled amidst breathtaking natural beauty
              </h2>
              <Wave className={styles.wave} />

              <p className={styles.copy}>
                Magna massa placerat tellus nibh cursus. Orci sit ridiculus
                pellentesque in enim amet lacinia velit viverra. Dignissim urna
                nam bibendum sit ornare.
              </p>
              <div className={styles.btnContainer}>
                <Button href='/' text='Show Location' btnType='primary' />
              </div>
            </div>
          </motion.div>
        </ContentPadding>
      </LayoutWrapper>
      <div className={styles.marqueContainer}>
        <Marquee />
      </div>
    </section>
  );
}
