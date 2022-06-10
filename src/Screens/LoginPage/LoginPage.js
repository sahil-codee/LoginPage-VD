import LoginForm from "../../Components/LoginForm/LoginForm";
import Navbar from "../../Components/Navbar/Navbar";
import "./LoginPage.css";

function LoginPage(props) {
  return (
    <div className="Login">
      <Navbar />
      <section className="bottom">
        <div className="Left col-md-6 col-lg-5 col-xs-12">
          <LoginForm />
        </div>
        <div className="Right col-md-6 col-lg-7 col-xs-0">
          <div className="SideImage" />
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
