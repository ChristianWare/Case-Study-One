import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./AboutSectionii.module.css";
import Img1 from "../../public/images/house.jpg";
import House from "../../public/icons/logo.svg";
import Button from "../Button/Button";

const AboutSectionii = () => {
  const data = [
    {
      title: "Professional Drivers",
      description:
        "Our experienced and courteous drivers are the epitome of professionalism, providing you with a seamless journey from start to finish.",
      icon: <House width={30} height={30} className={styles.icon} />,
    },
    {
      title: "Professional Drivers",
      description:
        "Our experienced and courteous drivers are the epitome of professionalism, providing you with a seamless journey from start to finish.",
      icon: <House width={30} height={30} className={styles.icon} />,
    },
  ];

  return (
    <div>
      <LayoutWrapper>
        <ContentPadding>
          <section className={styles.container}>
            <h2 className={styles.heading}>About us</h2>
            <div className={styles.content}>
              <div className={styles.right}>
                <div className={styles.copyContainer}>
                  <p className={styles.copy}>
                    Discover the allure of Arizona with Elite Retreat Rentals!
                    Based in vibrant Phoenix, we offer affordable lodging across
                    multiple properties, ensuring an unforgettable stay. Book
                    directly on our website or through top platforms like Airbnb
                    and VRBO. Your next vacation begins with Elite Retreat
                    Rentals—where comfort meets adventure!
                  </p>
                </div>
                {data.map((x, index) => (
                  <div className={styles.iconTextContainer} key={index}>
                    <div className={styles.itextLeft}>{x.icon}</div>
                    <div className={styles.itexRight}>
                      <h3 className={styles.title}>{x.title}</h3>
                      <p className={styles.copyii}>{x.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.left}>
                <div className={styles.imgContainer}>
                  <Image src={Img1} alt='image' fill className={styles.img} />
                </div>
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button href='/about' text='More about us' btnType='secondary' />
            </div>
          </section>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default AboutSectionii;