import ContactSection from "../../components/ContactSection/ContactSection";
import Nav from "../../components/Nav/Nav";
import PageIntroii from "../../components/PageIntroii/PageIntroii";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";

const contact = () => {
  return (
    <main>
      <Nav color='blue' assetColor='blue' hamburgerColor='blueHamburger' />
      <PageIntroii
        heading='Contact'
        copy='We look forward to spesking with you soon. Feel free to reach out to us anytime.'
      />
      <ContactSection />
      <Services />
      <Testimonials />
    </main>
  );
};
export default contact;
