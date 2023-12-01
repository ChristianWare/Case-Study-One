import styles from "./PropPreview.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.jpg";

const PropPreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={Img} alt='image' fill className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.price}>
          $350 <span className={styles.perDay}>/per day</span>
        </span>
        <h3 className={styles.title}>Seaside Serenity</h3>
        <p className={styles.copy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3 beds 1
          bathroom 57 m2 For rent
        </p>
      </div>
    </div>
  );
};
export default PropPreview;
