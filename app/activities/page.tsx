import LeftRightSection from "../../components/LeftRightSection/LeftRightSection";
import Marquee from "../../components/Marquee/Marquee";
import Nav from "../../components/Nav/Nav";
import PageIntroii from "../../components/PageIntroii/PageIntroii";
import Welcome from "../../components/Welcome/Welcome";
import Spa from "../../public/images/spa.jpg";
import Wellness from "../../public/images/wellness.jpg";

export default function ActivitiesPage() {
  return (
    <main>
      <Nav color='blue' assetColor='blue' hamburgerColor='blueHamburger' />
      <PageIntroii
        heading='Spa & Wellness'
        copy='Embrace Ultimate Luxury at our Vacation Rental Getaways'
      />
      <Marquee />
      <LeftRightSection
        direction='directionLeft'
        intro='Spa Treatments'
        heading='Immerse Yourself in our Relaxing Spa Sanctuary'
        copy='Sit nibh quam cursus mauris eu faucibus fringilla. Non nisl justo rhoncus sed tincidunt ullamcorper in. Id varius ac lacus nulla aliquet facilisis nunc lectus. Dictum diam nisi tincidunt molestie ut. Commodo rhoncus rhoncus massa ultrices faucibus posuere turpis sed vulputate. Ut non eget at accumsan.'
        src={Spa}
      />
      <LeftRightSection
        direction='directionRight'
        intro='Wellness Center'
        heading='Experience Serenity at our Wellness Center'
        copy='Pellentesque facilisis pellentesque nunc aenean condimentum pretium aliquam et. Nam ut semper malesuada diam aliquet. Tristique praesent sit in lectus purus volutpat nisl quam ullamcorper. Velit scelerisque mauris.'
        src={Wellness}
      />
      <Welcome />
    </main>
  );
}
