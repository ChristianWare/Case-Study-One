import { IRoom } from "../../backend/models/room";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import PropPreviewii from "../PropPreviewii/PropPreviewii";
import styles from "./Propertiesii.module.css";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

export default function Propertiesii({ data }: Props) {
  const { rooms } = data;

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            {rooms?.map((room, index) => (
              <PropPreviewii
                key={room._id}
                room={room}
                bgColor={
                  index === 2
                    ? "darkBrown" // Specific case for index 3
                    : index % 2 === 0
                    ? "teal" // Even indices
                    : "brown" // Odd indices
                }
                reversed={index % 2 !== 0} // Reverse every other
              />
            ))}
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
}
