import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import Menu from "../../images/menu.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/sessions">
          <img className="logo" src={Logo} alt="FIT Diary" />
        </Link>
        <div className="menu-opener">
          <img src={Menu} alt="Menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
