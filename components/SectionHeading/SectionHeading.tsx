import styles from "./SectionHeading.module.css";

interface Props {
  title: string;
  color: string;
  // dotColor: string;
}

const SectionHeading = ({ title, color = "" }: Props) => {
  return (
    <div className={styles.top}>
      <span className={`${styles.span} ${styles[color]}`}> {title}</span>
    </div>
  );
};

export default SectionHeading;
