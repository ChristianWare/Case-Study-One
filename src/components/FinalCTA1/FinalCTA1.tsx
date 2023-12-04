import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FinalCTA1.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.jpg";
import Button from "../Button/Button";

const FinalCTA1 = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image src={Img} alt='image' width={60} height={60} className={styles.img} />
          </div>
          <h3 className={styles.heading}>Still have questions?</h3>
          <p className={styles.copy}>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <div className={styles.btnContainer}>
            <Button text='More Questions' btnType='secondary' href='/' />
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default FinalCTA1;
