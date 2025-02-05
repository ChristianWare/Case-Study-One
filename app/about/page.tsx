import AboutIntro from "../../components/AboutIntro/AboutIntro";
import AboutOurStory from "../../components/AboutOurStory/AboutOurStory";
import AboutSectionii from "../../components/AboutSectionii/AboutSectionii";
import Nav from "../../components/Nav/Nav";
import OurPhilosophy from "../../components/OurPhilosophy/OurPhilosophy";
import PageIntro from "../../components/PageIntro/PageIntro";
import Services from "../../components/Services/Services";
import AboutImage from "../../public/images/about.webp";

const about = () => {
  return (
    <main>
      <Nav />
      <PageIntro heading='About' src={AboutImage} />
      <AboutIntro />
      <AboutSectionii />
      <AboutOurStory />
      <OurPhilosophy />
      <Services />
    </main>
  );
};
export default about;
