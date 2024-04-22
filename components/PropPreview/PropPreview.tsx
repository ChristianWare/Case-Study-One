import styles from "./PropPreview.module.css";
import Image from "next/image";
import { IRoom } from "../../backend/models/room";
import Link from "next/link";
import Button from "../Button/Button";

interface Props {
  room: IRoom;
}

const PropPreview = ({ room }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={
              room?.images?.length > 0
                ? room.images[0].url
                : "/images/default_room_image.jpg"
            }
            alt={room.name}
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightTop}>
          <span className={styles.price}>
            $ {room.pricePerNight}{" "}
            <span className={styles.perDay}>/ per night</span>
          </span>
          {/* <div className={styles.available}>Available</div> */}
        </div>
        <Link href={`/properties/${room?._id}`} className={styles.title}>
          {room?.name}
        </Link>
        <p className={styles.copy}>{room.description}</p>

        {/* <div className={styles.featuresBox}>
          <div className={styles.feature}>Beds available: {room.numOfBeds}</div>
          <div className={styles.feature}>
            Guest Capacity: {room.guestCapacity}
          </div>
          <div className={styles.feature}>Total Ratings: {room.ratings}</div>
        </div> */}
        <div className={styles.btnContainer}>
          <Button
            text='View Details'
            btnType='secondary'
            href={`/properties/${room?._id}`}
          />
        </div>
      </div>
    </div>
  );
};
export default PropPreview;
