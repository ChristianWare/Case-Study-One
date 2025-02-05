import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import Error from "./error";
import AboutSectionii from "../components/AboutSectionii/AboutSectionii";
import Testimonials from "../components/Testimonials/Testimonials";
import Welcome from "../components/Welcome/Welcome";
import Services from "../components/Services/Services";
import Location from "../components/Location/Location";

export const metadata = {
  title: "Home - Elite Retreat Rentals",
  description: "This is the description for the home page of this application.",
};

export const revalidate = 10;

const getRooms = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/rooms`);
    const data = res.json();
    // revalidatePath("/api/rooms");
    return data;
  } catch (error) {
    console.log("error => ", error);
  }
};

export default async function Home() {
  const data = await getRooms();

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return (
    <div>
      <Hero />
      <Welcome />
      <Featured data={data} />
      <AboutSectionii />
      <Services />
      <Location />
      <Testimonials />
    </div>
  );
}
