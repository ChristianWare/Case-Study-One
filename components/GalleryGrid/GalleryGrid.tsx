import Image from "next/image";
import styles from "./GalleryGrid.module.css";
import { IImage } from "../../backend/models/room";

interface Props {
  images: IImage[];
}

const GalleryGrid = ({ images }: Props) => {
  return (
    <div>
      <h2 className={styles.heading2}>Featured gallery</h2>
      <div className={styles.gallery}>
        {images.map((x, index) => (
          <div key={index} className={styles.imgContainer4}>
            <Image src={x?.url} alt={x?.url} fill className={styles.img} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default GalleryGrid;
