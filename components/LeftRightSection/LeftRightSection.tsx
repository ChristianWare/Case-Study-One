import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./LeftRightSection.module.css";
import Image, { StaticImageData } from "next/image";
import Wave from "../../public/icons/wave.svg";

interface Props {
  direction: string;
  intro: string;
  heading: string;
  copy: string;
  src: StaticImageData;
}

export default function LeftRightSection({
  direction = "",
  intro,
  heading,
  copy,
  src,
}: Props) {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={`${styles.left} ${styles[direction]}`}>
              <div className={styles.imgContainer}>
                <Image
                  src={src}
                  title='image'
                  alt='image'
                  fill
                  className={styles.img}
                />
              </div>
            </div>
            <div className={`${styles.right} ${styles[direction]}`}>
              <SectionHeading title={intro} color='blue' />
              <h2 className={styles.heading}>{heading} </h2>
              <Wave className={styles.wave} />
              <p className={styles.copy}>{copy}</p>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
}
