"use client";

import { IBooking } from "../../backend/models/booking";
import { useAppSelector } from "../../redux/hooks";
import Image from "next/image";
import Link from "next/link";
import styles from "./BookingDetails.module.css";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";

interface Props {
  data: {
    booking: IBooking;
  };
}

const BookingDetails = ({ data }: Props) => {
  const booking = data?.booking;
  const { user } = useAppSelector((state) => state.auth);

  const isPaid = booking?.paymentInfo?.status === "paid" ? true : false;

  return (
    <LayoutWrapper>
      <ContentPadding>
        <h1 className={styles.h1Heading}>Booking Details</h1>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Invoice #:
            <br />
          </h2>
          <h2 className={styles.heading}>{booking?._id}</h2>
          <Link
            href={`/bookings/invoice/${booking?._id}`}
            className={styles.link}
          >
            <i className='fa fa-print'></i> See Invoice
          </Link>
        </div>

        <div className={styles.infoBox}>
          <h3>User Info</h3>
          <table>
            <tbody>
              <tr>
                <th scope='row'>Name:</th>
                <td>{booking?.user?.name}</td>
              </tr>
              <tr>
                <th scope='row'>Email:</th>
                <td>{booking?.user?.email}</td>
              </tr>
              <tr>
                <th scope='row'>Amount Paid:</th>
                <td>${booking?.amountPaid}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.infoBox}>
          <h3>Booking Info</h3>
          <table>
            <tbody>
              <tr>
                <th scope='row'>Check In:</th>
                <td>
                  {new Date(booking?.checkInDate).toLocaleString("en-US")}
                </td>
              </tr>
              <tr>
                <th scope='row'>Check Out:</th>
                <td>
                  {new Date(booking?.checkOutDate).toLocaleString("en-US")}
                </td>
              </tr>
              <tr>
                <th scope='row'>Days of Stay:</th>
                <td>{booking?.daysOfStay}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.infoBox}>
          <h3>Payment Info:</h3>
          <table>
            <tbody>
              <tr>
                <th scope='row'>Status:</th>
                <td>
                  <b className={isPaid ? "greenColor" : "redColor"}>
                    {isPaid ? "Paid" : "Not Paid"}
                  </b>
                </td>
              </tr>
              {user?.role === "admin" && (
                <tr>
                  <th scope='row'>Stripe ID:</th>
                  <td>
                    <b className='redColor'>{booking?.paymentInfo.id}</b>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <h4>Booked Room:</h4>

        <hr />

        {booking?.room ? (
          <div>
            <div>
              <div>
                <Image
                  src={booking?.room?.images[0]?.url}
                  alt={booking?.room?.name}
                  height='45'
                  width='65'
                />
              </div>

              <div>
                <Link href={`/properties/${booking?.room?._id}`}>
                  {booking?.room?.name}
                </Link>
              </div>

              <div>
                <p>${booking?.room?.pricePerNight}</p>
              </div>

              <div>
                <p>{booking?.daysOfStay} Day(s)</p>
              </div>
            </div>
          </div>
        ) : (
          <div>Room no longer exist</div>
        )}
        <hr />
      </ContentPadding>
    </LayoutWrapper>
  );
};

export default BookingDetails;
