import BlogPreview from "../BlogPreview/BlogPreview";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./BlogSection.module.css";
import { FC } from "react";
import { BlogSectionProps, BlogData } from "../../lib/interface";
import Button from "../Button/Button";

const BlogSection: FC<BlogSectionProps> = ({ blogData }) => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.bottom}>
          {/* <BlogPreview />
          <BlogPreview />
          <BlogPreview /> */}
          {blogData.map((x: BlogData, index: number) => (
            <BlogPreview key={index} mapData={x} />
          ))}
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default BlogSection;
