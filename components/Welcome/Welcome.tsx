import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Welcome.module.css";
import Wave from "../../public/icons/wave.svg";
import ContentPadding from "../ContentPadding/ContentPadding";

export default function Welcome() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <SectionHeading title='welome' color='blue' />
            <h2 className={styles.heading}>
              Indulge in exquisite accommodations and services
            </h2>
            <Wave className={styles.wave} />
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur. Id facilisis velit velit
              vitae id malesuada sem feugiat sit. Nisi ipsum suspendisse.
            </p>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
}
