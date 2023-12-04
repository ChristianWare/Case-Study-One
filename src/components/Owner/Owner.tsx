import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Owner.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.jpg";
import Quote from "../../../public/icons/quote.svg";

const Owner = () => {
  return (
    <div className={styles.bgColor}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <Quote width={130} height={130} className={styles.quote} />
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <h3 className={styles.heading}>
                “People now recognise that having a good performance
                conversation means that something happens as a result.”
              </h3>
              <p className={styles.copy}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                nibh pretium nunc mauris sed adipiscing. Lorem ipsum dolor sit
                amet, consectetur adipiscing
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
              <div className={styles.statsContainer}>
                <div className={styles.statsLeft}>
                  <h4 className={styles.statsHeading}>Kristin Watson</h4>
                  <p className={styles.statsTitle}>Product manager at Joon</p>
                </div>
                <div className={styles.statsRight}>
                  <Image
                    src={Img}
                    alt='image'
                    width={80}
                    height={80}
                    className={styles.imgii}
                  />
                </div>
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Owner;
