"use client";

import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Faqs.module.css";
import { faqs } from "../../lib/data";
import { useState } from "react";
import Arrow from "../../public/icons/downArrow.svg";

const Faqs = () => {
  const [selected, setSelected] = useState<null | number>(null);
  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Frequently asked questions</h2>
            <p className={styles.copy}>
              Welcome to our FAQ section, designed to make your experience
              seamless. Explore common inquiries about booking, unique property
              features, pet policies, and our dedicated 24/7 support, ensuring
              your stay with us is as straightforward as it is enjoyable.
            </p>
          </div>
          <div className={styles.bottom}>
            {faqs.map((x, i) => (
              <div
                key={x.id}
                className={
                  selected === i
                    ? styles.qaContainer + " " + styles.showBorder
                    : styles.qaContainer
                }
                onClick={() => toggle(i)}
              >
                <div className={styles.headingArrowContainer}>
                  <div className={styles.h3Container}>
                    <h3 className={styles.question} lang='en'>
                      {x.question}
                    </h3>
                  </div>
                  {selected === i ? (
                    <Arrow className={styles.iconFlip} width={20} height={20} />
                  ) : (
                    <Arrow className={styles.icon} width={20} height={20} />
                  )}
                </div>
                <div
                  className={
                    selected === i
                      ? styles.answerContainer + " " + styles.show
                      : styles.answerContainer
                  }
                >
                  <p className={styles.answer} lang='en'>
                    {x.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Faqs;
