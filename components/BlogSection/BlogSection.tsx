import BlogPreview from "../BlogPreview/BlogPreview";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.bottom}>
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default BlogSection;
