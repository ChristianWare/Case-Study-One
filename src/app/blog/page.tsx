import BlogPreview from "@/components/BlogPreview/BlogPreview";
import ContentPadding from "@/components/ContentPadding/ContentPadding";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import PageIntro from "@/components/PageIntro/PageIntro";
import styles from "./BlogPage.module.css";
import FinalCTA2 from "@/components/FinalCTA2/FinalCTA2";
import FinalCTA1 from "@/components/FinalCTA1/FinalCTA1";
import Faqs from "@/components/Faqs/Faqs";

const page = () => {
  return (
    <>
      <LayoutWrapper>
        <ContentPadding>
          <PageIntro
            heading='Resources and insights'
            copy='The latest industry news, interviews, technologies, and resources.'
          />
        </ContentPadding>
        <div className={styles.bottom}>
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
        </div>
      </LayoutWrapper>
      <Faqs />
      <FinalCTA1 />
      <FinalCTA2 />
    </>
  );
};
export default page;
