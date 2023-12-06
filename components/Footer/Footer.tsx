"use client";

import { footer } from "../../lib/data";
import styles from "./Footer.module.css";
import Link from "next/link";
import { useState } from "react";
import ArrowRight from "../../public/icons/arrowRight.svg";
import House from "../../public/icons/house.svg";

const Footer = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.contanier}>
      <div className={styles.content}>
        <Link href='/' className={styles.logo}>
          <House width={60} height={60} className={styles.icon} /> Elite Retreat
          Rentals
        </Link>{" "}
        <div className={styles.middleDesktop}>
          {footer.map((f, index) => (
            <div key={index} className={styles.sectionContainer}>
              <div className={styles.headingContainer}>
                <p className={styles.heading}>{f.heading}</p>
              </div>
              <div className={styles.footerItemContainer}>
                {f.section.map((s, index) => (
                  <p key={index} className={styles.footerItem}>
                    {s.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.middleMobile}>
          {footer.map((f, i) => (
            <div key={f.id} className={styles.sectionContainer}>
              <div
                className={styles.headingContainer}
                onClick={() => toggle(i)}
              >
                <p className={styles.heading}>{f.heading}</p>
                <span className={styles.arrow}>
                  {selected === i ? (
                    <ArrowRight
                      className={styles.arrowFlip}
                      width={15}
                      height={15}
                    />
                  ) : (
                    <ArrowRight
                      width={15}
                      height={15}
                      className={styles.arrow}
                    />
                  )}
                </span>
              </div>
              <div
                className={
                  selected === i
                    ? styles.answer + " " + styles.show
                    : styles.answer
                }
              >
                {f.section.map((s, index) => (
                  <p key={index} className={styles.footerItem}>
                    {s.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <p className={styles.copy}>
              &copy; {currentYear} Elite Retreat Rentals. All Rights Reserved{" "}
            </p>
          </div>
          <div className={styles.bottomRight}></div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
