import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./ContactSection.module.css";
import Image from "next/image";
import Img from "../../../public/images/img1.jpg";

const ContactSection = () => {
  const contactInfo = [
    {
      feature: "Email",
      value: "hello@email.com",
    },
    {
      feature: "Location # 1",
      value: "San Fransico, CA",
    },
    {
      feature: "Phone",
      value: "210-450-6589",
    },
    {
      feature: "Location # 2",
      value: "San Fransico, CA",
    },
  ];

  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Get in touch with us and lets talk
            </h1>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh
              pretium nunc mauris sed adipiscing.
            </p>
            <div className={styles.statsContainer}>
              {contactInfo.map((x, index) => (
                <div key={index} className={styles.box}>
                  <p className={styles.feature}>{x.feature}</p>
                  <p className={styles.value}>{x.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default ContactSection;
