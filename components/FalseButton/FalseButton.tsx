"use client";

import styles from "./FalseButton.module.css";

interface Props {
  text: string;
  btnType: string;
  onClick?: () => void;
}

const FalseButton = ({ text, btnType, onClick }: Props) => {
  return (
    <div className={styles.container}>
      <button className={`${styles.btn} ${styles[btnType]}`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
export default FalseButton;
