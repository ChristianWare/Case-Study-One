'use client'

import ContentPadding from "../../components/ContentPadding/ContentPadding";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import styles from "./AccountPage.module.css";
import { useAppSelector } from "../../redux/hooks";

const AccountPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <LayoutWrapper>
      <ContentPadding>
        <h1>
          Hi, <span className={styles.userName}>{user?.name} 👋</span>
        </h1>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default AccountPage;
