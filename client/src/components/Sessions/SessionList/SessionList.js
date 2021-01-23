import { Link } from "react-router-dom";
import { url } from "../../../api";
import { SessionSummary } from "../../";
import useFetch from "../../../hooks/useFetch";
import addCircle from "../../../images/add_circle.svg";

const SessionList = () => {
  const { data: sessions, isPending, error } = useFetch(`${url}/sessions`);

  return (
    <>
      <h1 className="main-title">Sessions</h1>
      <Link to="/add-session" className="add-btn">
        <img src={addCircle} alt="Agregar" />
      </Link>
      <div className="list-container">
        {error && <div>{error}</div>}
        {isPending && (
          <div className="main-container">
            <h1 className="main-title">Cargando sesiones...</h1>
          </div>
        )}
        {sessions &&
          sessions.map((session) => (
            <SessionSummary
              key={session._id}
              createdAt={session.createdAt}
              name={session.name}
              id={session._id}
            />
          ))}
      </div>
    </>
  );
};

export default SessionList;
