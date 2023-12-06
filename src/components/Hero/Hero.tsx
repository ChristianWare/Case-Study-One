import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";
import Img from "../../../public/images/img1.jpg";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* <Nav /> */}
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.heading}>
                The best place to find your dream house
              </h1>
              <p className={styles.copy}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                nibh pretium nunc mauris sed adipiscing. Lorem ipsum dolor sit
                amet
              </p>
              <div className={styles.btnContainer}>
                <Button text='Learn More' btnType='primary' href='/' />
                <Button text='About us' btnType='secondary' href='/' />
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
