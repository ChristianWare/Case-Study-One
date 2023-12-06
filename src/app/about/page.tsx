import ContentPadding from "@/components/ContentPadding/ContentPadding";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import Methodology from "@/components/Methodology/Methodology";
import Owner from "@/components/Owner/Owner";
import PageIntro from "@/components/PageIntro/PageIntro";

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
    </>
  );
};
export default about;
