"use client";

import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactArea.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";

const ContactArea = () => {
  return (
    <section className={styles.container}>
      <div className={styles.layoutWrapper}>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.left}
            >
              <h2 className={styles.heading}>Let&apos;s Have a conversation</h2>
              <p className={styles.topText}>
                Reach out to us today to see how you can begin to take advantage
                of the benefits of having your own website for your rental
                property.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.right}
            >
              <div>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactArea;
