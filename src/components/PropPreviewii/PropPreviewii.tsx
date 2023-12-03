import styles from "./PropPreviewii.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.jpg";

const PropPreviewii = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={Img} alt='image' fill className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightTop}>
          <span className={styles.price}>
            $350 <span className={styles.perDay}>/ per day</span>
          </span>
          <div className={styles.available}>Available</div>
        </div>
        <h3 className={styles.title}>Seaside Serenity</h3>
        <span className={styles.perDay}>New York</span>
        <div className={styles.featuresBox}>
          <div className={styles.feature}>3 Beds</div>
          <div className={styles.feature}>1 Bathroom</div>
          <div className={styles.feature}>57 m2</div>
        </div>
      </div>
    </div>
  );
};

export default PropPreviewii;
