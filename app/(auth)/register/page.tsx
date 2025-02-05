import Login from "../../../components/auth/Login";
import Register from "../../../components/auth/Register";
import Nav from "../../../components/Nav/Nav";

const RegisterPage = () => {
  return (
    <main>
      <div style={{ backgroundColor: "#f6f4ef" }}>
      <Nav color='blue' assetColor='blue' hamburgerColor='blueHamburger' />
        <Register />
      </div>
    </main>
  );
};

export default RegisterPage;
