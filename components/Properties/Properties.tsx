"use client";

import { IRoom } from "../../backend/models/room";
import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import PropPreviewii from "../PropPreviewii/PropPreviewii";
import styles from "./Properties.module.css";
import { usePathname } from "next/navigation";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

const Properties = ({ data }: Props) => {
  const { rooms } = data;

  const pathname = usePathname();

  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.top}>
          {pathname === "/" && (
            <>
              <h2 className={styles.heading}>More Listings</h2>
              <p className={styles.copy}>
                Here is a comprehensive list of all the properties we have
                available for you to enjoy. Feel free to reach out with
                questions.
              </p>
            </>
          )}
        </div>
        <div className={styles.bottom}>
          {rooms?.length === 0 ? (
            <div className='alret alret-danger mt-5 w-100'>
              <b>No Rooms.</b>
            </div>
          ) : (
            rooms
              ?.slice(2, 6)
              .map((room) => <PropPreviewii key={room._id} room={room} />)
          )}
        </div>
        {pathname === "/properties" && (
          <div className={styles.bottom}>
            {rooms?.length === 0 ? (
              <div className='alret alret-danger mt-5 w-100'>
                <b>No Rooms.</b>
              </div>
            ) : (
              rooms?.map((room) => <PropPreviewii key={room._id} room={room} />)
            )}
          </div>
        )}
        <div className={styles.btnContainer}>
          {pathname === "/" && (
            <Button text='Explore All Listings' btnType='secondary' href='/' />
          )}
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Properties;
