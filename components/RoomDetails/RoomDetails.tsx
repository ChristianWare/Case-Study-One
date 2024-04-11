"use client";

import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./RoomDetails.module.css";
import FinalCTA1 from "../FinalCTA1/FinalCTA1";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import { IRoom } from "../../backend/models/room";
import BookingDatePicker from "../BookingDatePicker/BookingDatePicker";
import ImageGrid from "../ImageGrid/ImageGrid";
import GalleryGrid from "../GalleryGrid/GalleryGrid";
import { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Discover from "../Discover/Discover";
import NewReview from "../review/NewReview";
import ListReviews from "../review/ListReviews";

interface Props {
  data: {
    room: IRoom;
  };
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const RoomDetails = ({ data }: Props) => {
  const { room } = data;

  useEffect(() => {
    const setMap = async () => {
      const coordinates = room?.location?.coordinates;

      const map = new mapboxgl.Map({
        container: "room-map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: coordinates,
        zoom: 12,
      });

      // Add marker to the map:
      new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    };
    if (room?.location) setMap();
  }, [room?.location]);
  return (
    <>
      <LayoutWrapper>
        <ContentPadding>
          <h1 className={styles.heading}>{room?.name}</h1>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <div className={styles.featuresBox}>
                <div className={styles.feature}>
                  Max Guests: {room?.guestCapacity}
                </div>
                <div className={styles.feature}>
                  Number of beds: {room?.numOfBeds}
                </div>
                {room?.ratings > 0 && (
                  <div className={styles.feature}>
                    Average Rating:{" "}
                    <b>{(Math.floor(room?.ratings * 10) / 10).toFixed(1)}</b>{" "}
                    out of 5 Stars
                  </div>
                )}
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
            <br />

            {room?.location && (
              <div className='my-5'>
                <div id='room-map' style={{ height: 350, width: "100%" }}></div>
              </div>
            )}
          </div>
          <ListReviews reviews={room?.reviews} />
          <NewReview roomId={room?._id} />
          <br />
          <br />
        </ContentPadding>
      </LayoutWrapper>
      <Discover />
      <FinalCTA1 />
    </>
  );
};
export default RoomDetails;
