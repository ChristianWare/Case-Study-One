import UserSidebar from "../../components/layout/UserSidebar";
import { ReactNode } from "react";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import ContentPadding from "../../components/ContentPadding/ContentPadding";
import FinalCTA1 from "../../components/FinalCTA1/FinalCTA1";
import styles from "./settingStyles.module.css";

interface Props {
  children: ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div>
          <h1 className={styles.heading}>User Settings</h1>
        </div>
        <div className={styles.top}>
          <div className={styles.left}>
            <UserSidebar />
          </div>
        </div>

        <div className={styles.bottom}>
          {children}
        </div>
        <FinalCTA1 />
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default UserLayout;
