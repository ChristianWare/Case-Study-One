import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Services.module.css";
import Asset from "../../public/icons/asset.svg";

const serviceData = [
  {
    id: 1,
icon: <Asset width={25} height={25} className={styles.icon} />,
    title: "Personalized Service",
    desc: "Pellentesque gravida integer eu tellus auctor id libero. Suscipit nibh.",
  },
  {
    id: 2,
icon: <Asset width={25} height={25} className={styles.icon} />,
    title: "Spa and Wellness Facilities",
    desc: "Pellentesque gravida integer eu tellus auctor id libero. Suscipit nibh.",
  },
  {
    id: 3,
icon: <Asset width={25} height={25} className={styles.icon} />,
    title: "Concierge Assistance",
    desc: "Pellentesque gravida integer eu tellus auctor id libero. Suscipit nibh.",
  },
  {
    id: 4,
icon: <Asset width={25} height={25} className={styles.icon} />,
    title: "High-Speed Internet Access",
    desc: "Pellentesque gravida integer eu tellus auctor id libero. Suscipit nibh.",
  },
  {
    id: 5,
icon: <Asset width={25} height={25} className={styles.icon} />,
    title: "Laundry and Dry Cleaning",
    desc: "Pellentesque gravida integer eu tellus auctor id libero. Suscipit nibh.",
  },
  {
    id: 6,
icon: <Asset width={25} height={25} className={styles.icon} />,
    title: "Excursion and Tour Arrangements",
    desc: "Pellentesque gravida integer eu tellus auctor id libero. Suscipit nibh.",
  },
];

export default function Services() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <SectionHeading title='services' color='blue' />
              <h2 className={styles.heading}>
                Elevate your stay with our services
              </h2>
            </div>
            <div className={styles.bottom}>
              {serviceData.map((x) => (
                <div className={styles.card} key={x.id}>
                  <div className={styles.iconContainer}>{x.icon}</div>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
}
