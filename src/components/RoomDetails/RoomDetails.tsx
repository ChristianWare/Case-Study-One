import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./RoomDetails.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.jpg";

const RoomDetails = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <h1 className={styles.heading}>Seaside Serenity</h1>
            <div className={styles.featuresBox}>
              <div className={styles.feature}>3 Beds</div>
              <div className={styles.feature}>1 bathroom</div>
              <div className={styles.feature}>2500 Sq Ft</div>
            </div>
          </div>
          <div className={styles.topRight}>
            <div className={styles.price}>
              $340 <span className={styles.perNight}>/ per night</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default RoomDetails;
