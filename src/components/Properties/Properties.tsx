import Button from "../Button/Button";
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
          <p className={styles.copy}>
            Here is a comprehensive list of all the properties we have available
            for you to enjoy. Feel free to reach out with questions.
          </p>
        </div>
        <div className={styles.bottom}>
          <PropPreviewii />
          <PropPreviewii />
          <PropPreviewii />
        </div>
        <div className={styles.btnContainer}>
          <Button text='Explore All Listings' btnType='secondary' href='/' />
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Properties;
