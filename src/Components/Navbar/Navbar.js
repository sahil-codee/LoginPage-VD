import Button from "../Button/Button";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ATools<span>.</span>
          </a>
          <div className="navbarButtons">
            <Button className="buttonNav navbarStart btn-dark">Start Free Trial</Button>
            <Button className="buttonNav navbarLogin btn-dark">Login</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
