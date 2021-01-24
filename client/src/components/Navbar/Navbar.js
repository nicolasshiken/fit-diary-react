import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import Menu from "../../images/menu.svg";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleOpenNav = () => {
    setShowNavbar((showNavbar) => !showNavbar);
  };

  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="FIT Diary" />
        </Link>
        <div className="menu-opener" onClick={handleOpenNav}>
          <img src={Menu} alt="Menu" />
        </div>
      </div>
      <div
        className={showNavbar ? "nav-opened show" : "nav-opened"}
        onClick={handleOpenNav}
      >
        <div className="nav-row">
          <Link to="/sessions" className="nav-item">
            Sesiones
          </Link>
          <Link to="/meals" className="nav-item">
            Comidas
          </Link>
        </div>
        <div className="nav-row">
          <Link to="/profile" className="nav-item">
            Perfil
          </Link>
          <Link to="/" className="nav-item">
            Inicio
          </Link>
          <Link to="/" className="nav-item">
            Cerrar sesión
          </Link>
        </div>
        <div className="nav-row">
          <Link to="/add-session" className="nav-item">
            Nueva sesión
          </Link>
          <Link to="/add-meal" className="nav-item">
            Nueva comida
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
