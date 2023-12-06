import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import PropPreview from "../PropPreview/PropPreview";
import styles from "./Featured.module.css";

const Featured = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2>Featured properties</h2>
            <div className={styles.btnContainer}>
              <Button text='Explore all listings' btnType='tertiary' href='/' />
            </div>
          </div>
          <div className={styles.bottom}>
            <PropPreview />
            <PropPreview />
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Featured;
