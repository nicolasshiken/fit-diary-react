import { Link, useHistory } from "react-router-dom";
import { SessionSummary } from "../../";
import addCircle from "../../../images/add_circle.svg";
import { useSelector } from "react-redux";

const SessionList = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  if (!user) {
    history.push("/auth");
  }

  const sessions = useSelector((state) => state.sessions);

  return (
    <>
      <h1 className="main-title">Sesiones</h1>
      <Link to="/add-session" className="add-btn">
        <img src={addCircle} alt="Agregar" />
      </Link>
      <div className="list-container">
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
