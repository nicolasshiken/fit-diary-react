import { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import dayjs from "dayjs";
import { EditSession, ExerciseSummary } from "../../";
import editImage from "../../../images/edit.svg";
import "./sessionDetails.css";
import { useSelector } from "react-redux";

const SessionDetails = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  if (!user) {
    history.push("/auth");
  }

  const { _id } = useParams();
  const [editing, setEditing] = useState(false);

  const session = useSelector((state) =>
    state.sessions.find((s) => s._id === _id)
  );

  return (
    <>
      {editing && <EditSession session={session} setEditing={setEditing} />}
      {session && !editing && (
        <>
          {session.name && <h1 className="main-title">{session.name}</h1>}
          {!session.name && (
            <h1 className="main-title">
              Sesión del {dayjs(session.createdAt).format("D/MM")}
            </h1>
          )}
          <div className="list-container">
            <div className="edit-session" onClick={() => setEditing(true)}>
              <img className="btn-small" src={editImage} alt="Edit" />
              <p>Editar sesión</p>
            </div>
            {session.exercises.map((exercise) => (
              <ExerciseSummary key={exercise.id} exercise={exercise} />
            ))}
            <Link to="/sessions" className="error">
              Volver a sesiones.
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default SessionDetails;
