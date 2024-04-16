"use client";

import { IReview } from "../../backend/models/room";
import {
  useDeleteReviewMutation,
  useLazyGetRoomReviewsQuery,
} from "../../redux/api/roomApi";
import { MDBDataTable } from "mdbreact";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import styles from "./RoomReviews.module.css";
import FalseButton from "../FalseButton/FalseButton";

const RoomReviews = () => {
  const [roomId, setRoomId] = useState("");

  const router = useRouter();

  const [getRoomReviews, { data, error }] = useLazyGetRoomReviewsQuery();
  const reviews = data?.reviews || [];

  const [deleteReview, { isSuccess, isLoading }] = useDeleteReviewMutation();

  const getRoomReviewsHandler = () => {
    getRoomReviews(roomId);
  };

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      router.refresh();
      toast.success("Review deleted");
    }
  }, [error, isSuccess, router]);

  const setReviews = () => {
    const data: { columns: any[]; rows: any[] } = {
      columns: [
        {
          label: <div className={styles.theadContainer}>ID</div>,
          field: "id",
          sort: "asc",
        },
        {
          label: <div className={styles.theadContainer}>Rating</div>,
          field: "rating",
          sort: "asc",
        },
        {
          label: <div className={styles.theadContainer}>Comment</div>,
          field: "comment",
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

    reviews?.forEach((review: IReview) => {
      data?.rows?.push({
        id: review._id,
        rating: review?.rating,
        comment: review?.comment,

        actions: (
          <div className='d-flex'>
            <button
              disabled={isLoading}
              onClick={() => deleteReviewHandler(review?._id)}
            >
              <i className='fa fa-trash'></i>
            </button>
          </div>
        ),
      });
    });

    return data;
  };

  const deleteReviewHandler = (id: string) => {
    deleteReview({ id, roomId });
  };

  return (
    <LayoutWrapper>
      <ContentPadding>
        <div>
          <div>
            <div className={styles.lableInputBox}>
              <label htmlFor='roomId_field'>Enter Room ID</label>
              <input
                type='text'
                id='roomId_field'
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />

              <div className={styles.btnContainer}>
                <FalseButton
                  btnType='secondary'
                  text={isLoading ? "Fetching..." : "Fetch Reviews"}
                  onClick={getRoomReviewsHandler}
                />
              </div>
            </div>
          </div>
        </div>

        {reviews?.length > 0 ? (
          <MDBDataTable data={setReviews()} className={styles.dataTable} />
        ) : (
          <div>No Reviews</div>
        )}
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default RoomReviews;
