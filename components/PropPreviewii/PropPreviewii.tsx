import styles from "./PropPreviewii.module.css";
import Image from "next/image";
import { IRoom } from "../../backend/models/room";
import Button from "../Button/Button";
import Link from "next/link";

interface Props {
  room: IRoom;
  bgColor: string; // 'teal' or 'brown'
  reversed: boolean; // true to reverse layout
}

const PropPreviewii = ({ room, bgColor, reversed }: Props) => {
  return (
    <div className={`${styles.container} ${reversed ? styles.reversed : ""}`}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Link href={`/properties/${room?._id}`}>
            <Image
              src={
                room?.images?.length > 0
                  ? room.images[0].url
                  : "/images/default_room_image.jpg"
              }
              alt='image'
              fill
              className={styles.img}
            />
          </Link>
        </div>
      </div>
      <div className={`${styles.right} ${styles[bgColor]}`}>
        <div className={styles.box}>
          <h3 className={styles.title}>{room?.name}</h3>
          <p className={styles.featureii}>{room.description}</p>
          <div className={styles.btnContainer}>
            <Button
              text='View Details'
              btnType='secondary'
              href={`/properties/${room?._id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropPreviewii;
