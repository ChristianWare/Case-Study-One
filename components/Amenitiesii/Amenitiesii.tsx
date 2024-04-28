import styles from "./Amenitiesii.module.css";
import Button from "../Button/Button";
import Bed from "../../public/icons/bed.svg";
import Fire from "../../public/icons/firef.svg";
import Kitchen from "../../public/icons/kitchen.svg";
import Pillow from "../../public/icons/pillow.svg";
import Towel from "../../public/icons/towel.svg";
import Storage from "../../public/icons/storage.svg";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";

const Amenitiesii = () => {
  const data = [
    {
      icon: <Bed width={50} height={50} className={styles.icon} />,
      service: "Gaming console",
    },
    {
      icon: <Fire width={50} height={50} className={styles.icon} />,
      service: "Always sunny weather",
    },
    {
      icon: <Kitchen width={50} height={50} className={styles.icon} />,
      service: "80+ restaurants nearby",
    },
    {
      icon: <Pillow width={50} height={50} className={styles.icon} />,
      service: "Private garage",
    },
    {
      icon: <Towel width={50} height={50} className={styles.icon} />,
      service: "Tennis & Basketball",
    },
    {
      icon: <Storage width={50} height={50} className={styles.icon} />,
      service: "Spa near 100m",
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.right}>
              {data.map((x, index) => (
                <div className={styles.card} key={index}>
                  {x.icon}
                  <h3 className={styles.title}>{x.service}</h3>
                </div>
              ))}
            </div>
            <div className={styles.left}>
              <h2 className={styles.heading}>
                Outdoor - your leisure and nearby attractions
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
                  btnType='primaryii'
                  href='/properties'
                />
              </div>
            </div>
          </div>
          <div className={styles.btnContainerii}>
            <Button
              text='Explore all listings'
              btnType='primaryii'
              href='/properties'
            />
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Amenitiesii;
