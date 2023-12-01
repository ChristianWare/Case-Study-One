import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./PostHero.module.css";
import Airbnb from "../../../public/icons/airbnb.svg";

const PostHero = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <Airbnb width={100} height={100} className={styles.icon} />
          <Airbnb width={100} height={100} className={styles.icon} />
          <Airbnb width={100} height={100} className={styles.icon} />
          <Airbnb width={100} height={100} className={styles.icon} />
          
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default PostHero;
