import Nav from "../../components/Nav/Nav";
import PageIntro from "../../components/PageIntro/PageIntro";
import PageIntroii from "../../components/PageIntroii/PageIntroii";
import ActivitiesImage from "../../public/images/img1.jpg";

export default function ActivitiesPage() {
  return (
    <main>
      <Nav color='blue' assetColor='blue' hamburgerColor='blueHamburger' />
      <PageIntroii
        heading='Spa & Wellness'
        copy='Embrace Ultimate Luxury at our Vacation Rental Getaways

'
      />
    </main>
  );
}
