import ContentPadding from "../../components/ContentPadding/ContentPadding";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import Faqs from "../../components/Faqs/Faqs";
import FinalCTA1 from "../../components/FinalCTA1/FinalCTA1";
import FinalCTA2 from "../../components/FinalCTA2/FinalCTA2";
import PageIntro from "../../components/PageIntro/PageIntro";
import Error from "../error";
import Properties from "../../components/Properties/Properties";

export const revalidate = 0;
export const dynamic = "force-static";

const getRooms = async () => {
  try {
    const res = await fetch(`${process.env.API_URI}/api/rooms`);
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
      <LayoutWrapper>
        <ContentPadding>
          <PageIntro
            heading='All properties for rent'
            copy='Here is a comprehensive list of all the properties we have
                available for you to enjoy. Feel free to reach out with
                questions.'
          />
          <Properties data={data} />
        </ContentPadding>
      </LayoutWrapper>
      <Faqs />
      <FinalCTA1 />
      <FinalCTA2 />
    </>
  );
}
