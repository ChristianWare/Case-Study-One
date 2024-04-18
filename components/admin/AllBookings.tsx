"use client";

import { IBooking } from "../../backend/models/booking";
import { useDeleteBookingMutation } from "../../redux/api/bookingApi";
import { MDBDataTable } from "mdbreact";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import styles from "./AllBookings.module.css";
import Modal from "../Modal/Modal";
import FalseButton from "../FalseButton/FalseButton";

interface Props {
  data: {
    bookings: IBooking[];
  };
}

const AllBookings = ({ data }: Props) => {
  const bookings = data?.bookings;
  console.log(bookings);
  const router = useRouter();

  const [modalBookingId, setModalBookingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deleteBooking, { error, isLoading, isSuccess }] =
    useDeleteBookingMutation();

  const deleteBookingHandler = async (id: string) => {
    try {
      await deleteBooking(id);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleDeleteModal = (id: string) => {
    setModalBookingId(id);
    setIsModalOpen(true);
  };

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
          label: <div className={styles.theadContainer}>ID</div>,
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
        console.log("Booking ID:", booking._id);
        data?.rows?.push({
          id: booking._id,
          datebooked: formatDate(booking.createdAt),
          checkin: formatDate(booking?.checkInDate),
          checkout: formatDate(booking?.checkOutDate),
          actions: (
            <div className={styles.actions}>
              <Link href={`/bookings/${booking._id}`} className={styles.link}>
                <i className='fa fa-eye'></i>
              </Link>
              <Link href={`/bookings/invoice/${booking._id}`}>
                <i className='fa fa-receipt'></i>
              </Link>

              <div className={styles.trash}>
                <i
                  className='fa fa-trash'
                  onClick={() => handleDeleteModal(booking._id)}
                ></i>
              </div>
            </div>
          ),
        });
      });

    return data;
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
      <Modal
        isOpen={isModalOpen && modalBookingId !== null}
        onClose={() => {
          setIsModalOpen(false);
          setModalBookingId(null);
        }}
      >
        <p>Are you sure you want to delete booking? This can not be undone.</p>
        <div className={styles.btnContainer}>
          <FalseButton
            btnType='secondary'
            text={isLoading ? "Deleting..." : "Delete Booking"}
            onClick={() => deleteBookingHandler(modalBookingId!)}
            disabled={isLoading}
          />
          <FalseButton
            btnType='primary'
            text='Cancel'
            onClick={() => {
              setIsModalOpen(false);
              setModalBookingId(null);
            }}
          />
        </div>
      </Modal>
    </div>
  );
};
export default AllBookings;
