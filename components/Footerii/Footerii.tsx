import Link from "next/link";
import styles from "./Footerii.module.css";
import LinkedIn from "../../public/icons/linkedin.svg";
import Facebook from "../../public/icons/facebook.svg";
import Insta from "../../public/icons/instagram.svg";

const Footerii = () => {
  const footer = [
    {
      id: 1,
      heading: "Home",
      href: "/",
    },
    {
      id: 6,
      heading: "Benefits",
      href: "/benefits",
    },
    {
      id: 11,
      heading: "About Us",
      href: "/about",
    },
    {
      id: 11,
      heading: "Pricing",
      href: "/pricing",
    },
    {
      id: 11,
      heading: "FAQs",
      href: "/faqs",
    },
    {
      id: 17,
      heading: "Blog",
      href: "/blog",
    },
    {
      id: 17,
      heading: "Glossary",
      href: "/glossary",
    },
    {
      id: 16,
      heading: "Contact",
      href: "/contact",
    },
  ];

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.right}>
          <div className={styles.middleDesktop}>
            {footer.map((f, index) => (
              <div key={index} className={styles.headingContainer}>
                <Link href={f.href} className={styles.heading}>
                  {f.heading}
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.leftBottom}>
            <Link
              href='https://www.linkedin.com/'
              target='_blank'
              className={styles.detail}
            >
              <LinkedIn className={styles.icon} width={12} height={12} />
            </Link>
            <Link
              href='https://www.facebook.com/'
              target='_blank'
              className={styles.detail}
            >
              <Facebook className={styles.icon} width={12} height={12} />
            </Link>
            <Link
              href='https://instagram.com/'
              target='_blank'
              className={styles.detail}
            >
              <Insta className={styles.icon} width={12} height={12} />
            </Link>
          </div>
        </div>
        <div className={styles.bottomDesktop}>
          <div className={styles.logoContainer}>LOGO HERE</div>
          <div className={styles.bottomLeft}>
            <p className={styles.copy}>
              &copy; 2024 Fonts & Footers - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footerii;
