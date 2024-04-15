"use client";

import { IRoom } from "../../backend/models/room";
import { useDeleteRoomMutation } from "../../redux/api/roomApi";
import { MDBDataTable } from "mdbreact";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import styles from "./AllRooms.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import FalseButton from "../FalseButton/FalseButton";
import NewRoom from "./NewRoom";

interface Props {
  data: {
    rooms: IRoom[];
  };
}

const AllRooms = ({ data }: Props) => {
  const rooms = data?.rooms;
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenii, setIsModalOpenii] = useState(false);

  const [deleteRoom, { error, isSuccess }] = useDeleteRoomMutation();

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      router.refresh();
      toast.success("Room deleted");
    }
  }, [error, isSuccess, router]);

  const setRooms = () => {
    const data: { columns: any[]; rows: any[] } = {
      columns: [
        {
          label: <div className={styles.theadContainer}>Room ID</div>,
          field: "id",
          sort: "asc",
        },
        {
          label: <div className={styles.theadContainer}>Name</div>,
          field: "name",
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

    rooms
      ?.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .forEach((room) => {
        data?.rows?.push({
          id: room._id,
          name: room.name,
          actions: (
            <div className={styles.actions}>
              <Link href={`/admin/rooms/${room._id}`} className=''>
                <i className='fa fa-pencil'></i>
              </Link>
              <Link
                href={`/admin/rooms/${room._id}/upload_images`}
                className=''
              >
                <i className='fa fa-images'></i>
              </Link>
              <Modal
                onClose={() => {
                  setIsModalOpen(false);
                }}
                isOpen={isModalOpen}
              >
                <p>
                  Are you sure you want to delete room? This can not be undone.{" "}
                </p>
                <div className={styles.btnContainer}>
                  <FalseButton
                    btnType='secondary'
                    text='Delete Room'
                    onClick={() => {
                      deleteRoomHandler(room._id);
                      setIsModalOpen(false);
                    }}
                  />
                  <FalseButton
                    btnType='primary'
                    text='Cancel'
                    onClick={() => setIsModalOpen(false)}
                  />
                </div>{" "}
              </Modal>
              <div className={styles.trash}>
                <i
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                  className='fa fa-trash'
                ></i>
              </div>
            </div>
          ),
        });
      });

    return data;
  };

  const deleteRoomHandler = (id: string) => {
    deleteRoom(id);
    // setIsModalOpen(false);
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
        <h2 className=''>{`${rooms?.length} Rooms`}</h2>
        {/* <Button
          text='Create room'
          btnType='secondary'
          href='/admin/rooms/new'
        /> */}
        <FalseButton
          btnType='secondary'
          text='Create Room'
          onClick={() => setIsModalOpenii(true)}
        />
        <Modal
          onClose={() => {
            setIsModalOpenii(false);
          }}
          isOpen={isModalOpenii}
        >
          <NewRoom onClose={() => setIsModalOpenii(false)} />
        </Modal>
      </div>

      <MDBDataTable
        data={setRooms()}
        className={styles.dataTable}
        bordered
        striped
        hover
      />
    </div>
  );
};
export default AllRooms;
