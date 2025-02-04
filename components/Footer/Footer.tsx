"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { useState } from "react";
import ArrowRight from "../../public/icons/arrowRight.svg";
import Logo from "../../public/icons/logo.svg";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import Image from "next/image";
import Img1 from "../../public/images/grand.jpg";
import Img2 from "../../public/images/featured.jpg";
import Img3 from "../../public/images/antelope.jpg";
import Img4 from "../../public/images/desert.jpg";
import Asset from "../../public/icons/asset.svg";
import Wave from "../../public/icons/wave.svg";
import Mail from "../../public/icons/mail.svg";
import Phone from "../../public/icons/phone.svg";

const images = [
  {
    id: 1,
    src: Img1,
  },
  {
    id: 2,
    src: Img2,
  },
  {
    id: 3,
    src: Img3,
  },
  {
    id: 4,
    src: Img4,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <div className={styles.top}>
        {images.map((x) => (
          <div className={styles.imgContainer} key={x.id}>
            <Image src={x.src} alt='' title='' fill className={styles.img} />
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <div className={styles.left}>
            <div className={styles.iconContainer}>
              <Mail className={styles.icon} />
            </div>
            <span className={styles.info}>info@yoursite.com</span>
          </div>
          <div className={styles.middle}>
            <div className={styles.logoContainer}>
              <Link href='/' className={styles.logo}>
                <span className={styles.asset}>
                  <Asset width={25} height={25} classname={styles.asset} />
                </span>
                E. R. Rentals
              </Link>
            </div>
            <Wave className={styles.wave} />
            <p className={styles.address}>
              321 Island Palm Avenue <br /> Palmville, Fiji
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.iconContainer}>
              <Phone className={styles.icon} />
            </div>
            <span className={styles.info}>+1 800 123 4567</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
