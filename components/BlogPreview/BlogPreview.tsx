import Image from "next/image";
import Img from "../../public/images/img1.jpg";
import styles from "./BlogPreview.module.css";
import { BlogPreviewProps } from "../../lib/interface";
import { FC } from "react";
import Link from "next/link";

const BlogPreview: FC<BlogPreviewProps> = ({ mapData, key }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Link href={`/blog/${mapData.slug}`}>
            <Image
              src={mapData.meta.thumbnaillUrl}
              alt='image'
              fill
              className={styles.img}
            />
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>{mapData.meta.title}</h3>
        <span className={styles.perDay}>{mapData.meta.date}</span>
        <div className={styles.feature}>{mapData.meta.description}</div>
      </div>
      <div className={styles.available}>Read More</div>
    </div>
  );
};
export default BlogPreview;
