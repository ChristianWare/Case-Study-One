import BlogPreview from "../../components/BlogPreview/BlogPreview";
import ContentPadding from "../../components/ContentPadding/ContentPadding";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import PageIntro from "../../components/PageIntro/PageIntro";
import styles from "./BlogPage.module.css";
import FinalCTA2 from "../../components/FinalCTA2/FinalCTA2";
import FinalCTA1 from "../../components/FinalCTA1/FinalCTA1";
import Faqs from "../../components/Faqs/Faqs";
import BlogSection from "../../components/BlogSection/BlogSection";
import Error from "../error";

export default async function BlogPage() {
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
    <>
      <LayoutWrapper>
        <ContentPadding>
          <PageIntro
            heading='Resources and insights'
            copy='The latest industry news, interviews, technologies, and resources.'
          />
        </ContentPadding>
        <BlogSection blogData={blogs} />
      </LayoutWrapper>
      <Faqs />
      <FinalCTA1 />
      <FinalCTA2 />
    </>
  );
};

