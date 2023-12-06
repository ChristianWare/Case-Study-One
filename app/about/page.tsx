import ContentPadding from "../../components/ContentPadding/ContentPadding";
import Faqs from "../../components/Faqs/Faqs";
import FinalCTA1 from "../../components/FinalCTA1/FinalCTA1";
import FinalCTA2 from "../../components/FinalCTA2/FinalCTA2";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import Methodology from "../../components/Methodology/Methodology";
import Owner from "../../components/Owner/Owner";
import PageIntro from "../../components/PageIntro/PageIntro";

const about = () => {
  return (
    <>
      <LayoutWrapper>
        <ContentPadding>
          <PageIntro
            heading='About the company'
            copy='Embodying sustainable practices for the future'
          />
        </ContentPadding>
      </LayoutWrapper>
      <Owner reverse='reverse' />
      <Methodology />
      <Faqs />
      <FinalCTA1 />
      <FinalCTA2 />
    </>
  );
};
export default about;
