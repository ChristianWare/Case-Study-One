import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";
import Img from "../../public/images/img1.jpg";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.heading} lang='en'>
                Your Unforgettable Vacation Starts Here.
              </h1>
              <p className={styles.copy}>
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
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Hero;
