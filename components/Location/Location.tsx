import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Location.module.css";
import Image from "next/image";
import Grand from "../../public/images/grand.jpg";
import Wave from "../../public/icons/wave.svg";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "../Button/Button";

export default function Location() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image src={Grand} title='image' alt='image' fill className={styles.img} />
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
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
}
