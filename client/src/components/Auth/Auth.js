import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp, signIn } from "../../actions/auth";

const Auth = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  if (user) {
    history.push("/");
  }

  const dispatch = useDispatch();

  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordsAreEqual, setPasswordsAreEqual] = useState(true);
  const [error, setError] = useState({
    equal: "",
    long: "",
  });

  const toggleSignUp = () => {
    setIsSignUp((isSignUp) => !isSignUp);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };

  useEffect(() => {
    if (isSignUp) {
      if (formData.password === formData.confirmPassword) {
        setPasswordsAreEqual(true);
        setError({ ...error, equal: null });
      } else {
        setPasswordsAreEqual(false);
        setError({ ...error, equal: "Las contraseñas no coinciden" });
      }

      if (formData.password.length < 7) {
        setError({
          ...error,
          length: "Recondamos que tu contraseña tenga al menos 8 caracteres.",
        });
      } else {
        setError({ ...error, long: null });
      }
    } else {
      setError({ equal: null, long: null });
    }
    // eslint-disable-next-line
  }, [formData.password, formData.confirmPassword, isSignUp]);

  return (
    <>
      <h1 className="main-title">
        {isSignUp ? "Registrarse" : "Iniciar Sesión"}
      </h1>
      <form className="list-container" onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="form-row">
            <div className="form-row-item">
              <label>Nombre</label>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row-item">
              <label>Apellido</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        <div className="form-row">
          <div className="form-row-item">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-row-item">
            <label>Contraseña</label>
            <input
              className={!passwordsAreEqual && isSignUp ? "warning" : null}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {isSignUp && (
          <div className="form-row">
            <div className="form-row-item">
              <label>Repetir contraseña</label>
              <input
                className={!passwordsAreEqual && isSignUp ? "warning" : null}
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {error.length && isSignUp && <p className="error">{error.length}</p>}
        {!passwordsAreEqual && isSignUp && (
          <p className="error">Las contraseñas no coinciden</p>
        )}

        <button
          disabled={
            (!passwordsAreEqual && isSignUp) || formData.password.length === 0
              ? true
              : false
          }
          className="cta"
        >
          Finalizar
        </button>
        {isSignUp ? (
          <p className="error">
            Ya eres miembro?{" "}
            <strong onClick={toggleSignUp}>Inicia sesión!</strong>
          </p>
        ) : (
          <p className="error">
            Aún no eres miembro?{" "}
            <strong onClick={toggleSignUp}>Registrate!</strong>
          </p>
        )}
      </form>
    </>
  );
};

export default Auth;
