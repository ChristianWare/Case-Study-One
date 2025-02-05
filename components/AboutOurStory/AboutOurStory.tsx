import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./AboutOurStory.module.css";
import Image from "next/image";
import Img1 from "../../public/images/grand.jpg";
import SectionHeading from "../SectionHeading/SectionHeading";
import Wave from "../../public/icons/wave.svg";
import Marquee from "../Marquee/Marquee";

export default function AboutOurStory() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image
                  src={Img1}
                  title='image'
                  alt='image'
                  fill
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.right}>
              <SectionHeading title='Out Story' color='blue' />
              <h2 className={styles.heading}>
                Discover the Journey Behind Camelia
              </h2>
              <Wave className={styles.wave} />

              <p className={styles.copy}>
                Sit nibh quam cursus mauris eu faucibus fringilla. Non nisl
                justo rhoncus sed tincidunt ullamcorper in. Id varius ac lacus
                nulla aliquet facilisis nunc lectus.
                <br />
                <br />
                Dictum diam nisi tincidunt molestie ut. Commodo rhoncus rhoncus
                massa ultrices faucibus posuere turpis sed vulputate. Ut non
                eget at accumsan.
              </p>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <div className={styles.marqueeContainer}>
        <Marquee />
      </div>
    </section>
  );
}
