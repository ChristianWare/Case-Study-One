import ContentPadding from "../../components/ContentPadding/ContentPadding";
import FinalCTA1 from "../../components/FinalCTA1/FinalCTA1";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import AdminSidebar from "../../components/layout/AdminSidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className='mt-2 mb-4 bg-light py-4'>
          <h2 className='text-secondary text-center'>Admin Dashboard</h2>
        </div>

        <div className='container'>
          <div className='row justify-content-around'>
            <div className='col-12 col-lg-3'>
              <AdminSidebar />
            </div>
            <div className='col-12 col-lg-8 user-dashboard'>{children}</div>
          </div>
        </div>
        <FinalCTA1 />
      </ContentPadding>
    </LayoutWrapper>
  );
};

export default AdminLayout;
