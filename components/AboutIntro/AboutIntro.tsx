import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./AboutIntro.module.css";

export default function AboutIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h2 className={styles.copy}>
              &ldquo;Dignissim ullamcorper consectetur ut diam ut risus. Ipsum
              turpis ut commodo auctor facilisis sed sed ipsum. Sed duis lacus
              vulputate. &ldquo;
            </h2>
            <div className={styles.scriptText}>Chris Ware</div>
            <div className={styles.founder}>E. R. Rentals Founder</div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
}
