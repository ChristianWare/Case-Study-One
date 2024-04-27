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
            <div className={styles.content}>
              <div className={styles.left}>
                <div className={styles.imgContainer}>
                  <Image src={Img1} alt='image' fill className={styles.img} />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.heading}>About us</h2>
                <p className={styles.copy}>
                  Elite Retreat Rentals is a Phoenix, AZ based company that
                  provides lodging services to travelers at an affordable price.
                  We currently provide lodging for multiple properties in the
                  state of Arizona. We allow clients to booking directly on our
                  website, in addition to OTA platforms such as Air bnb and
                  VRBO. Plan your next vacation with Elite Retreat Rentals.
                </p>
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
