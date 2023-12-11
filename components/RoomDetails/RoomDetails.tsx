"use client";

import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./RoomDetails.module.css";
import FinalCTA2 from "../FinalCTA2/FinalCTA2";
import FinalCTA1 from "../FinalCTA1/FinalCTA1";
import BlogPreview from "../BlogPreview/BlogPreview";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import { IRoom } from "../../backend/models/room";
import BookingDatePicker from "../room/BookingDatePicker";
import ImageGrid from "../ImageGrid/ImageGrid";
import GalleryGrid from "../GalleryGrid/GalleryGrid";

interface Props {
  data: {
    room: IRoom;
  };
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const RoomDetails = ({ data }: Props) => {
  const { room } = data;
  return (
    <>
      <LayoutWrapper>
        <ContentPadding>
          <h1 className={styles.heading}>{room?.name}</h1>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <div className={styles.featuresBox}>
                <div className={styles.feature}>
                  Guests: {room?.guestCapacity}
                </div>
                <div className={styles.feature}>
                  Number of beds: {room?.numOfBeds}
                </div>
                <div className={styles.feature}>
                  Total Ratings: {room?.ratings}
                </div>
              </div>
            </div>
            <div className={styles.topRight}>
              <div className={styles.price}>
                $ {room?.pricePerNight}{" "}
                <span className={styles.perNight}>/ per night</span>
              </div>
            </div>
          </div>
          <ImageGrid images={room?.images} />
          <div className={styles.propDetails}>
            <div className={styles.left}>
              <h2 className={styles.heading2}>About property</h2>
              <p className={styles.copy}>{room?.description}</p>
            </div>
            <div className={styles.right}>
              <BookingDatePicker room={room} />
            </div>
          </div>
          <br />
          <br />
          <GalleryGrid images={room?.images} />
          <div className={styles.location}>
            <br />
            <br />
            <h2 className={styles.heading2}>Location</h2>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.248717288147!2d-111.86333289999999!3d33.572891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7553fa7aaaab%3A0x55c463417f2cb0a2!2s10105%20E%20V%C3%ADa%20Linda%20Suite%20A-%20105%2C%20Scottsdale%2C%20AZ%2085258!5e0!3m2!1sen!2sus!4v1694633298828!5m2!1sen!2sus'
              width='100%'
              height='450'
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className={styles.test}
            ></iframe>
          </div>
          <br />
          <br />
          <h2 className={styles.heading2}>Lastes Articles</h2>
          <div className={styles.blogSection}>
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <FinalCTA1 />
      <FinalCTA2 />
    </>
  );
};
export default RoomDetails;
