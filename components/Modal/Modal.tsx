"use client";

import { useEffect } from "react";
import styles from "./Modal.module.css";

interface Props {
  isOpen: Boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Add CSS to disable scrolling when the modal is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Cleanup function to remove the event listener and reset body overflow
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}
