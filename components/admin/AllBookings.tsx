"use client";

import { IBooking } from "../../backend/models/booking";
import { useDeleteBookingMutation } from "../../redux/api/bookingApi";
import { MDBDataTable } from "mdbreact";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import styles from "./AllBookings.module.css";

interface Props {
  data: {
    bookings: IBooking[];
  };
}

const AllBookings = ({ data }: Props) => {
  const bookings = data?.bookings;

  const router = useRouter();

  const [deleteBooking, { error, isLoading, isSuccess }] =
    useDeleteBookingMutation();

  const formatDate = (date: any) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
  };

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      router.refresh();
      toast.success("Booking deleted");
    }
  }, [error, isSuccess, router]);

  const setBookings = () => {
    const data: { columns: any[]; rows: any[] } = {
      columns: [
        {
          label: <div className={styles.theadContainer}>Room ID</div>,
          field: "id",
          sort: "asc",
        },
        {
          label: <div className={styles.theadContainer}>Date Booked</div>,
          field: "datebooked",
          sort: "asc",
        },
        {
          label: <div className={styles.theadContainer}>Check In</div>,
          field: "checkin",
          sort: "asc",
        },
        {
          label: <div className={styles.theadContainer}>Check Out</div>,
          field: "checkout",
          sort: "asc",
        },
        {
          label: <div className={styles.theadContainer}>Actions</div>,
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    bookings
      ?.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .forEach((booking) => {
        data?.rows?.push({
          id: booking._id,
          datebooked: formatDate(booking.createdAt),
          checkin: formatDate(booking?.checkInDate),
          checkout: formatDate(booking?.checkOutDate),
          actions: (
            <div className={styles.actions}>
              <Link href={`/bookings/${booking._id}`}>
                <i className='fa fa-eye'></i>
              </Link>
              <Link href={`/bookings/invoice/${booking._id}`}>
                <i className='fa fa-receipt'></i>
              </Link>
              <button
                disabled={isLoading}
                onClick={() => deleteBookingHandler(booking?._id)}
              >
                <i className='fa fa-trash'></i>
              </button>
            </div>
          ),
        });
      });

    return data;
  };

  const deleteBookingHandler = (id: string) => {
    deleteBooking(id);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "50px",
        }}
      >
        <h2 className={styles.heading}>
          {bookings?.length > 1
            ? bookings?.length + " Bookings"
            : bookings?.length + " Bookings"}
        </h2>
      </div>
      <MDBDataTable data={setBookings()} className={styles.dataTable} />
    </div>
  );
};
export default AllBookings;
