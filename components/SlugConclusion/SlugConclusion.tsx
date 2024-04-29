import Image from "next/image";
import styles from "./SlugConclusion.module.css";
import Person from "../../public/images/person.png";

const SlugConclusion = ({ copy }: { copy: string }) => {
  return (
    <div className={styles.copyContainer}>
      <p className={styles.copy}>{copy}</p>
      <div className={styles.personBox}>
        <Image
          src={Person}
          alt='person'
          title='person'
          width={50}
          height={50}
          className={styles.personImage}
        />
        <div className={styles.reviewerTitleContainer}>
          <div className={styles.reviewer}>Barry La Nier</div>
          <span className={styles.title}>CEO</span>
        </div>
      </div>
    </div>
  );
};
export default SlugConclusion;
