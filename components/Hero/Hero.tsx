"use client";

import styles from "./Hero.module.css";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Wave from "../../public/icons/wave.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Nav from "../Nav/Nav";

const Hero = () => {
  return (
    <section className={styles.parent}>
      <Nav />
      <div className={styles.container}>
        <video preload='auto' autoPlay muted loop className={styles.video}>
          <source src='./video/heroiii.mp4' />
        </video>
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
                  Experience
                  <br /> Unparalleled
                  <br /> Comfort
                </h1>
                <Wave className={styles.wave} />
                <p className={styles.copy}>
                  Embrace Ultimate Luxury at our Vacation Rental Getaways
                </p>
              </motion.div>
            </div>
          </ContentPadding>
        </LayoutWrapper>
      </div>
    </section>
  );
};
export default Hero;
