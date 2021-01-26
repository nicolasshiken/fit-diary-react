import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import Logo from "../../images/logo.png";
import Menu from "../../images/menu.svg";
import "./navbar.css";
import decode from "jwt-decode";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [showNavbar, setShowNavbar] = useState(false);

  const handleOpenNav = () => {
    setShowNavbar((showNavbar) => !showNavbar);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/auth");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line
  }, [location]);

  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="FIT Diary" />
        </Link>
        {user?.result?.name && (
          <div className="menu-opener" onClick={handleOpenNav}>
            <img src={Menu} alt="Menu" />
          </div>
        )}
      </div>
      <div
        className={showNavbar ? "nav-opened show" : "nav-opened"}
        onClick={handleOpenNav}
      >
        {user?.result?.name && (
          <div className="nav-row">
            <Link to="/sessions" className="nav-item">
              Sesiones
            </Link>
            <Link to="/meals" className="nav-item">
              Comidas
            </Link>
          </div>
        )}
        <div className="nav-row">
          <Link
            to={user?.result?.name ? "/profile" : "/auth"}
            className="nav-item"
          >
            {user?.result?.name ? "Perfil" : "👋 Hello!"}
          </Link>
          {user?.result?.name && (
            <Link to="/" className="nav-item">
              Inicio
            </Link>
          )}
          {user?.result?.name && (
            <div onClick={logout} className="nav-item">
              Cerrar sesión
            </div>
          )}
        </div>
        {user?.result?.name && (
          <div className="nav-row">
            <Link to="/add-session" className="nav-item">
              Nueva sesión
            </Link>
            <Link to="/add-meal" className="nav-item">
              Nueva comida
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
