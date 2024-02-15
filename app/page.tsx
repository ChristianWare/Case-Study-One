import Hero from "../components/Hero/Hero";
import PostHero from "../components/PostHero/PostHero";
import Featured from "../components/Featured/Featured";
import Discover from "../components/Discover/Discover";
import Properties from "../components/Properties/Properties";
import Owner from "../components/Owner/Owner";
import Faqs from "../components/Faqs/Faqs";
import FinalCTA1 from "../components/FinalCTA1/FinalCTA1";
import FinalCTA2 from "../components/FinalCTA2/FinalCTA2";
import Error from "./error";
import BlogSection from "../components/BlogSection/BlogSection";
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "Home - Elite Retreat Rentals",
  description: "This is the description for the home page of this application.",
};

export const revalidate = 0;
export const dynamic = "force-static";

const getRooms = async () => {
  try {
    const res = await fetch(`${process.env.API_URI}/api/rooms`);
    const data = res.json();
    revalidatePath("/api/rooms");
    return data;
  } catch (error) {
    console.log("error => ", error);
  }
};

export default async function Home() {
  const data = await getRooms();

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  // Determine the correct path to the 'blogs' directory
  const blogsDirectory = path.join(process.cwd(), "blogs");

  // Use readdirSync to list files in the 'blogs' directory
  const files = fs.readdirSync(blogsDirectory);

  const blogs = files.map((filename: any) => {
    const fileContent = fs.readFileSync(
      path.join(blogsDirectory, filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <div>
      <Hero />
      <PostHero />
      <Featured data={data} />
      <Discover />
      <Properties data={data} />
      <Owner
        heading='“Revolutionizing luxury rentals, we own and manage our properties, ensuring unparalleled design, service, and a cohesive experience across our distinctive collection.”'
        copy='We redefine the holiday rental experience by directly owning and managing our properties, allowing for unparalleled design, service, and a cohesive experience across our distinctive collection, standing out in the evolving landscape of luxury accommodations.'
      />
      <Faqs />
      <BlogSection blogData={blogs} />
      <FinalCTA1 />
      <FinalCTA2 />
    </div>
  );
}
