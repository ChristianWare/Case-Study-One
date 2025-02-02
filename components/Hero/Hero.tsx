"use client";

import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";

const Hero = () => {
  return (
    <section className={styles.parent}>
    <div className={styles.container}>
      <video preload='auto' autoPlay muted loop className={styles.video}>
        <source src='./video/hero.mp4' />
      </video>
      <div className={styles.imgOverlay}></div>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.contentChildren}>
              <h1 className={styles.heading} lang='en'>
                Experience
                <br /> Unparalleled
                <br /> Comfort
              </h1>
            </div>
            {/* <p className={styles.copy}>
                Discover a curated selection of meticulously designed houses,
                each offering a unique blend of modern amenities and scenic
                beauty.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  text='See all properties'
                  btnType='primary'
                  href='/properties'
                />
                <Button text='About us' btnType='secondary' href='/about' />
              </div> */}
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
    </section>
  );
};
export default Hero;
