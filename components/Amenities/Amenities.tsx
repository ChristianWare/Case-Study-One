import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Amenities.module.css";
import Button from "../Button/Button";
import Bed from "../../public/icons/bed.svg";
import Fire from "../../public/icons/firef.svg";
import Kitchen from "../../public/icons/kitchen.svg";
import Pillow from "../../public/icons/pillow.svg";
import Towel from "../../public/icons/towel.svg";
import Storage from "../../public/icons/storage.svg";

const Amenities = () => {
  const data = [
    {
      icon: <Bed width={50} height={50} className={styles.icon} />,
      service: "King Size Beds",
      descr: "Scottsdale Airport, PHX Sky Harbor Int Airport",
    },
    {
      icon: <Fire width={50} height={50} className={styles.icon} />,
      service: "Cozy Fireplace",
      descr: "Scottsdale Airport, PHX Sky Harbor Int Airport",
    },
    {
      icon: <Kitchen width={50} height={50} className={styles.icon} />,
      service: "Kitchen Essentials",
      descr: "Scottsdale Airport, PHX Sky Harbor Int Airport",
    },
    {
      icon: <Pillow width={50} height={50} className={styles.icon} />,
      service: "Comfortable Pillows",
      descr: "Scottsdale Airport, PHX Sky Harbor Int Airport",
    },
    {
      icon: <Towel width={50} height={50} className={styles.icon} />,
      service: "Towels and Bed Linen",
      descr: "Scottsdale Airport, PHX Sky Harbor Int Airport",
    },
    {
      icon: <Storage width={50} height={50} className={styles.icon} />,
      service: "Ample Personal Storage",
      descr: "Scottsdale Airport, PHX Sky Harbor Int Airport",
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          {/* <h2 className={styles.heading}>Our Amenities</h2> */}
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>
                Indoor - facilities and all equipments
              </h2>
              <div className={styles.copyContainer}>
                <p className={styles.copy}>
                  Quis accumsan mi tellus sagittis ultrices. Imperdiet nunc ut
                  tempor lacus nulla eget varius diam ut. Sem id quam.
                </p>
              </div>
              <div className={styles.btnContainer}>
                <Button
                  text='Explore all listings'
                  btnType='secondary'
                  href='/properties'
                />
              </div>
            </div>
            <div className={styles.right}>
              {data.map((x, index) => (
                <div className={styles.card} key={index}>
                  {x.icon}
                  <h3 className={styles.title}>{x.service}</h3>
                  <p className={styles.desc}>{x.descr}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.btnContainerii}>
            <Button
              text='Explore all listings'
              btnType='secondary'
              href='/properties'
            />
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Amenities;
