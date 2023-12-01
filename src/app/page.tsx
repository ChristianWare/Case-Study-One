import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import PostHero from "@/components/PostHero/PostHero";
import Featured from "@/components/Featured/Featured";

export default function Home() {
  return (
    <div>
      <Hero />
      <PostHero />
      <Featured />
    </div>
  );
}
