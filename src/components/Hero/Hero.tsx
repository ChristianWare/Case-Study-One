import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Nav from "../Nav/Nav";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
        <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <h1>Hero</h1>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Hero;
