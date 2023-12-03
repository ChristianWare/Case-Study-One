import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Discover.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.jpg";
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
                <span className={styles.highlight}>Discover properties</span>
                <br /> that will improve your life and that of your family
              </h3>
              <p className={styles.copy}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                nibh pretium nunc mauris sed adipiscing.
              </p>
              <Button btnType='navBtn' text='To catelog' href='/' />
            </div>
            <div className={styles.right}></div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Discover;
