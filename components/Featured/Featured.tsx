"use client";

import styles from "./Featured.module.css";
import { IRoom } from "../../backend/models/room";
import PropPreview from "../PropPreview/PropPreview";
import Img1 from "../../public/images/featured.jpg";
import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";
import Wave from "../../public/icons/wave.svg";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";

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
    <motion.section
      variants={fadeIn("", 0.3)}
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className={styles.container}
    >
      {" "}
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <SectionHeading title='Featured' color='blue' />
            <h2 className={styles.heading}>
              Explore our
              <br />
              featured listings
            </h2>
            <Wave className={styles.wave} />
            {/* <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='image'
                title='image'
                fill
                className={styles.img}
              />
            </div> */}
          </div>
          <div className={styles.content}>
            <div className={styles.bottomContent}>
              {rooms?.length === 0 ? (
                <div>
                  <b>No Rooms.</b>
                </div>
              ) : (
                rooms?.map((room) => <PropPreview key={room._id} room={room} />)
              )}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </motion.section>
  );
};
export default Featured;
