import PageIntro from "../../components/PageIntro/PageIntro";
import Error from "../error";
import Img1 from "../../public/images/newhero.webp";
import Propertiesii from "../../components/Propertiesii/Propertiesii";
import Testimonials from "../../components/Testimonials/Testimonials";

export const revalidate = 10;

const getRooms = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/rooms`);
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error => ", error);
  }
};

export default async function PropertiesPage() {
  const data = await getRooms();

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return (
    <>
      <PageIntro heading='Stay' src={Img1} />
      <Propertiesii data={data} />
      <Testimonials />
    </>
  );
}
