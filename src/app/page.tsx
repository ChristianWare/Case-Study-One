import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import PostHero from "@/components/PostHero/PostHero";
import Featured from "@/components/Featured/Featured";
import Discover from "@/components/Discover/Discover";

export default function Home() {
  return (
    <div>
      <Hero />
      <PostHero />
      <Featured />
      <Discover />
    </div>
  );
}
