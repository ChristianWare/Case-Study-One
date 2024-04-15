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
        <div className='mt-2 mb-4 bg-light py-4'>
          <h1 className={styles.heading}>User Settings</h1>
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <UserSidebar />
          </div>
          <div className={styles.right}>{children}</div>
        </div>
        <FinalCTA1 />
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default UserLayout;
