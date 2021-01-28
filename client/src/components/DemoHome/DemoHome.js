import { Link } from "react-router-dom";
import { useState } from "react";

const DemoHome = () => {
  const [language, setLanguage] = useState(true);

  return (
    <div className="list-container home">
      <p
        className="error language"
        onClick={() => setLanguage((prevLang) => !prevLang)}
      >
        {language ? "ENGLISH" : "ESPAÑOL"}
      </p>
      <h1 className="main-title">
        {language
          ? "Hola! Bienvenido al demo de FIT Diary"
          : "Hi! Welcome to FIT Diary Demo"}
      </h1>
      <h2 className="main-subtitle">
        {language
          ? "Este demo tiene todas las funcionalidades que tendra la version final, con la diferencia de que todo sera eliminado de la base de datos despues de un tiempo."
          : "This demo has the same functionalities as the final version, with the difference that everything will be deleted from the database after some time."}
      </h2>
      <h2 className="main-subtitle">
        {language
          ? "Puedes crear cuentas, iniciar sesión, crear sesiones de entrenamiento y agregar comidas!"
          : "You can register, login, create sesions and add meals!"}
      </h2>
      <h2 className="main-subtitle">
        {language ? "Puedes comenzar" : "You can start by"}{" "}
        <Link to="/auth">{language ? "registrandote!" : "Signing Up!"}</Link>
      </h2>
    </div>
  );
};

export default DemoHome;
