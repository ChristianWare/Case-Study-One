import Testimonials from "../../../../components/Testimonials/Testimonials";
import ForgotPassword from "../../../../components/user/ForgotPassword";

export const metadata = {
  title: "Forgot Password",
};

const ForgotPasswordPage = () => {
  return (
    <main>
      <ForgotPassword />
      <Testimonials />
    </main>
  );
};
export default ForgotPasswordPage;
