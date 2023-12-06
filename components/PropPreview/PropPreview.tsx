import styles from "./PropPreview.module.css";
import Image from "next/image";
import Img from "../../public/images/img1.jpg";

const PropPreview = () => {
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
        <p className={styles.copy}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          nihil perspiciatis! Tempora reprehenderit iure cupiditate suscipit
          officiis molestiae veritatis quas quia corporis expedita hic,
          architecto est inventore, sunt pariatur laborum!
        </p>

        <div className={styles.featuresBox}>
          <div className={styles.feature}>3 Beds</div>
          <div className={styles.feature}>1 Bathroom</div>
          <div className={styles.feature}>57 m2</div>
        </div>
      </div>
    </div>
  );
};
export default PropPreview;
