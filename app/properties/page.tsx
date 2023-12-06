import ContentPadding from "../../components/ContentPadding/ContentPadding";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import Nav from "../../components/Nav/Nav";
import PropPreviewii from "../../components/PropPreviewii/PropPreviewii";
import styles from "./properties.module.css";
import Faqs from "../../components/Faqs/Faqs";
import FinalCTA1 from "../../components/FinalCTA1/FinalCTA1";
import FinalCTA2 from "../../components/FinalCTA2/FinalCTA2";
import PageIntro from "../../components/PageIntro/PageIntro";

const page = () => {
  return (
    <>
      <LayoutWrapper>
        <ContentPadding>
          <PageIntro
            heading='All properties for rent'
            copy='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit
              ipsam repudiandae corrupti temporibus voluptate! A neque debitis
              omnis reprehenderit?'
          />
          <div className={styles.bottom}>
            <PropPreviewii />
            <PropPreviewii />
            <PropPreviewii />
            <PropPreviewii />
            <PropPreviewii />
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <Faqs />
      <FinalCTA1 />
      <FinalCTA2 />
    </>
  );
};
export default page;
