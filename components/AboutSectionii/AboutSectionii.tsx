"use client";

import styles from "./AboutSectionii.module.css";
import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Img1 from "../../public/images/aboutii.webp";
import House from "../../public/icons/asset.svg";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";

const AboutSectionii = () => {
  const data = [
    {
      title: "Unforgettable Arizona Getaways",
      description:
        "We offer budget-friendly stays across diverse properties, ensuring a memorable experience for every traveler.",
      icon: <House width={30} height={30} className={styles.icon} />,
    },
    {
      title: "Direct Booking Convenience",
      description:
        "Book directly on our website or through Airbnb and VRBO, making your next vacation planning a breeze.",
      icon: <House width={30} height={30} className={styles.icon} />,
    },
  ];

  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <ContentPadding>
          <motion.section
            variants={fadeIn("", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.container}
          >
            <div className={styles.content}>
              <div className={styles.right}>
                <h2 className={styles.heading}>About us</h2>
                <div className={styles.imgContainerii}>
                  <Image src={Img1} alt='image' fill className={styles.img} />
                </div>
                <p className={styles.copy}>
                  Book directly on our website or through top platforms like
                  Airbnb and VRBO. Your next vacation begins with Elite Retreat
                  Rentals—where comfort meets adventure!
                </p>
                {data.map((x, index) => (
                  <div className={styles.iconTextContainer} key={index}>
                    <div className={styles.itextLeft}>{x.icon}</div>
                    <div className={styles.itexRight}>
                      <h3 className={styles.title}>{x.title}</h3>
                      <p className={styles.copyii}>{x.description}</p>
                    </div>
                  </div>
                ))}
                <div className={styles.btnContainer}>
                  <Button
                    href='/about'
                    text='More about us'
                    btnType='primary'
                  />
                </div>
              </div>
              <div className={styles.left}>
                <div className={styles.imgContainer}>
                  <Image src={Img1} alt='image' fill className={styles.img} />
                </div>
              </div>
            </div>
          </motion.section>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default AboutSectionii;
