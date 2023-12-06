import Image from "next/image";
import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FinalCTA2.module.css";
import Img from "../../../public/images/img1.jpg";

const FinalCTA2 = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h3 className={styles.heading}>
                We are here to take care of all your vacation rental needs in
                the Phoenix, AZ area. Explore all of our properties for rent.
              </h3>
              <div className={styles.btnContainer}>
                <Button
                  text='All properties'
                  href='/properties'
                  btnType='secondary'
                />
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
export default FinalCTA2;
