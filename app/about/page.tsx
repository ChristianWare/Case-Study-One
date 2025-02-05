import AboutIntro from "../../components/AboutIntro/AboutIntro";
import PageIntro from "../../components/PageIntro/PageIntro";
import AboutImage from "../../public/images/about.webp";

const about = () => {
  return (
    <main>
      <PageIntro heading='About' src={AboutImage} />
      <AboutIntro />
    </main>
  );
};
export default about;
