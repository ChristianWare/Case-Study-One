import Error from "../../error";
import RoomDetails from "../../../components/room/RoomDetails";

interface Props {
  params: { id: string };
}

export const revalidate = 0;


const getRoom = async (id: string) => {
  const res = await fetch(`${process.env.API_URI}/api/rooms/${id}`, {
    cache: "no-cache",
  });
  return res.json();
};

export default async function RoomDetailsPage({ params }: Props) {
  const data = await getRoom(params?.id);

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return (
    <div>
      <RoomDetails data={data} />
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const data = await getRoom(params?.id);

  return {
    title: data?.room?.name,
  };
}
