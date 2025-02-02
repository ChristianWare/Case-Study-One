import { IRoom } from "../../backend/models/room";
import PropPreview from "../PropPreview/PropPreview";
import styles from "./Featured.module.css";
import Img1 from "../../public/images/featured.jpg";
import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";
import Wave from "../../public/icons/wave.svg";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

const Featured = ({ data }: Props) => {
  const { rooms } = data;

  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <SectionHeading title='Featured' color='blue' />
        <h2 className={styles.heading}>Explore our <br /> featured listings</h2>
        <Wave className={styles.wave} />
        <div className={styles.imgContainer}>
          <Image src={Img1} alt='image' title='image' className={styles.img} />{" "}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.bottomContent}>
          {rooms?.length === 0 ? (
            <div>
              <b>No Rooms.</b>
            </div>
          ) : (
            rooms
              ?.slice(0, 2)
              .map((room) => <PropPreview key={room._id} room={room} />)
          )}
        </div>
      </div>
    </section>
  );
};
export default Featured;
