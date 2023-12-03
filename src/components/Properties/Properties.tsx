import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import PropPreviewii from "../PropPreviewii/PropPreviewii";
import styles from "./Properties.module.css";

const Properties = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.top}>
          <h2 className={styles.heading}>More Listings</h2>
          <p className={styles.copy}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam mollitia natus dolores, eveniet qui.</p>
        </div>
        <div className={styles.bottom}>
          <PropPreviewii />
          <PropPreviewii />
          <PropPreviewii />
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Properties;
