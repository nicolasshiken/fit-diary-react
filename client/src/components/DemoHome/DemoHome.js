import { Link, useHistory } from "react-router-dom";

const DemoHome = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  if (!user) {
    history.push("/auth");
  }

  return (
    <div className="list-container">
      <h1 className="main-title">Hola! Bienvenido al demo de FIT Diary</h1>
      <h2 className="main-subtitle">
        Para probarla, puedes comenzar{" "}
        <Link to="/add-session">creando una sesión</Link>
      </h2>
      <h2 className="main-subtitle">
        Todos lo creado en este demo se elimina automaticamente despues de 10
        minutos!
      </h2>
    </div>
  );
};

export default DemoHome;
