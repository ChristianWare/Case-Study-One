import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./ContactSection.module.css";
import Image from "next/image";
import Img from "../../public/images/hero.webp";
import ContactForm from "../ContactForm/ContactForm";

const ContactSection = () => {
  const contactInfo = [
    {
      feature: "Email",
      value: "hello@eliteretreatrentals.com",
    },
    {
      feature: "Phone",
      value: "623-450-6589",
    },
    {
      feature: "Instagram",
      value: "@eliteRetreatRentals",
    },
    {
      feature: "Facebook",
      value: "facebook.com/eliteretreatrentals",
    },
  ];

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Reach Out</h2>
              <ContactForm />
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default ContactSection;
