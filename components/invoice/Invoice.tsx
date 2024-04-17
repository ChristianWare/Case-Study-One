"use client";

import { IBooking } from "../../backend/models/booking";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import styles from "./Invoice.module.css";
import FalseButton from "../FalseButton/FalseButton";

interface Props {
  data: {
    booking: IBooking;
  };
}

const Invoice = ({ data }: Props) => {
  const booking = data?.booking;

  const formatDate = (date: any) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const handleDownload = () => {
    const input = document.getElementById("booking_invoice");

    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("/image/png");

        const pdf = new jsPDF();
        const pdfWidth = pdf.internal.pageSize.getWidth();
        pdf.addImage(imgData, 0, 0, pdfWidth, 0);
        pdf.save(`invoice_${booking?._id}.pdf`);
      });
    }
  };

  return (
    <LayoutWrapper>
      <ContentPadding>
        <div>
          <div className={styles.btnContainer}>
            <FalseButton
              btnType='secondary'
              text='Download Invoice'
              onClick={handleDownload}
            />
          </div>
          <div>
            <div id='booking_invoice'>
              <div className={styles.top}>
                <div className={styles.left}>
                  <div className={styles.logo}>Elite Retreat Rentals</div>
                </div>
                <div className={styles.right}>
                  <h1 className={styles.heading}>Invoice</h1>
                  <div className={styles.categorySpanContainer}>
                    <div className={styles.category}>Invoice Number:</div>
                    <span>{booking?._id}</span>
                  </div>
                  <div className={styles.categorySpanContainer}>
                    <div className={styles.category}>Date:</div>
                    <span>{formatDate(booking.createdAt)}</span>
                  </div>
                </div>
              </div>
              <div className={styles.middle}>
                <div className={styles.middleLeft}>
                  <b>Bill To:</b>
                  <div>{booking?.user.name}</div>
                  <div>{booking?.user.email}</div>
                  <br />
                  <b>Status:</b>
                  {/* {new Date(booking?.createdAt).toLocaleString("en-US")} */}
                  <div className={styles.status}>
                    {booking?.paymentInfo?.status?.toUpperCase()}
                  </div>
                </div>
                <div className={styles.middleRight}>
                  <b>Bill From:</b>
                  <div>Elite Retreat Rentals</div>
                  <div>
                    455 Foggy Heights,
                    <br />
                    AZ 85004, US
                  </div>
                  <br />
                  <b>Phone:</b>
                  <div>(602) 519-0450</div>
                  <br />
                  <b>Email:</b>
                  <div>info@eliteretreatrentals.com</div>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.bottomTop}>
                  <div className={styles.btl}>
                    <b>Property</b>
                  </div>
                  <div className={styles.btr}>
                    <b>Cost per Day</b>
                    <b>Days</b>
                    <b>Price</b>
                  </div>
                </div>
                <div className={styles.bottomBottom}>
                  <b>{booking?.room?.name}</b>
                </div>
              </div>
              <main>
                {/* <table>
                  <thead>
                    <tr>
                      <th>Room</th>
                      <th>Price Per Night</th>
                      <th>Check In Date</th>
                      <th>Check Out Date</th>
                      <th>Days of Stay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{booking?.room?.name}</td>
                      <td>${booking?.room?.pricePerNight}</td>
                      <td>{formatDate(booking?.checkInDate)}</td>
                      <td>{formatDate(booking?.checkOutDate)}</td>
                      <td>{booking?.daysOfStay}</td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <b>GRAND TOTAL</b>
                      </td>
                      <td>
                        $
                        {booking?.amountPaid?.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table> */}
                <div>
                  {/* <div>NOTICE:</div>
                  <div>
                    A finance charge of 1.5% will be made on unpaid balances
                    after 30 days.
                  </div> */}
                </div>
              </main>
              {/* <footer>
                Invoice was created on a computer and is valid without the
                signature.
              </footer> */}
            </div>
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Invoice;
