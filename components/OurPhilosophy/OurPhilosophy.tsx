import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./OurPhilosophy.module.css";
import Image from "next/image";
import Img1 from "../../public/images/grand.jpg";
import SectionHeading from "../SectionHeading/SectionHeading";
import Wave from "../../public/icons/wave.svg";
import Marquee from "../Marquee/Marquee";

export default function OurPhilosophy() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              {/*  */}
              <SectionHeading title='OUR PHILOSOPHY' color='blue' />
              <h2 className={styles.heading}>Creating Memorable Experiences</h2>
              <Wave className={styles.wave} />

              <p className={styles.copy}>
                Pellentesque facilisis pellentesque nunc aenean condimentum
                pretium aliquam et. Nam ut semper malesuada diam aliquet.
                <br />
                <br />
                Tristique praesent sit in lectus purus volutpat nisl quam
                ullamcorper. Velit scelerisque mauris.
              </p>
            </div>
            <div className={styles.right}>
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
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
}
