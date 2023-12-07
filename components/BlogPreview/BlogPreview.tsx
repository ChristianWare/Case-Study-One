import Image from "next/image";
import Img from "../../public/images/img1.jpg";
import styles from "./BlogPreview.module.css";

const BlogPreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={Img} alt='image' fill className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>Blog Title Here</h3>
        <span className={styles.perDay}>Dec 6th, 2023</span>
        <div className={styles.feature}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          magni?
        </div>
      </div>
      <div className={styles.available}>Read More</div>
    </div>
  );
};
export default BlogPreview;
