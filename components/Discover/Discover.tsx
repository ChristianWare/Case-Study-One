import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Discover.module.css";
import Image from "next/image";
import Img from "../../public/images/img1.jpg";
import Button from "../Button/Button";

const Discover = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.container}>
          <Image src={Img} alt='img' fill className={styles.img} />
          <div className={styles.content}>
            <div className={styles.left}>
              <h3 className={styles.heading}>
                <span className={styles.highlight}>Our vacation homes</span>
                <br />
                will improve your stay in Phoenix.
              </h3>
              <p className={styles.copy}>
                Immerse yourself in a personalized booking experience, ensuring
                that your getaway is not just a vacation but an unforgettable
                journey in your very own dream house.
              </p>
              <Button
                btnType='navBtn'
                text='All Properties'
                href='/properties'
              />
            </div>
            <div className={styles.right}></div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Discover;
