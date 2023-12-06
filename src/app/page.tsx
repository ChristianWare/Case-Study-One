import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import PostHero from "@/components/PostHero/PostHero";
import Featured from "@/components/Featured/Featured";
import Discover from "@/components/Discover/Discover";
import Properties from "@/components/Properties/Properties";
import Owner from "@/components/Owner/Owner";
import Faqs from "@/components/Faqs/Faqs";
import FinalCTA1 from "@/components/FinalCTA1/FinalCTA1";
import FinalCTA2 from "@/components/FinalCTA2/FinalCTA2";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <PostHero />
      <Featured />
      <Discover />
      <Properties />
      <Owner
        heading='“Revolutionizing luxury rentals, we own and manage our properties, ensuring unparalleled design, service, and a cohesive experience across our distinctive collection.”'
        copy='We redefine the holiday rental experience by directly owning and managing our properties, allowing for unparalleled design, service, and a cohesive experience across our distinctive collection, standing out in the evolving landscape of luxury accommodations.'
      />
      <Faqs />
      <FinalCTA1 />
      <FinalCTA2 />
      {/* <Footer /> */}
    </div>
  );
}
