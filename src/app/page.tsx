import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import PostHero from "@/components/PostHero/PostHero";

export default function Home() {
  return (
    <div>
      <Hero />
      <PostHero />
    </div>
  );
}
