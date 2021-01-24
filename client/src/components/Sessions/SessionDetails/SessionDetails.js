import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useParams } from "react-router-dom";
import { EditSession, ExerciseSummary } from "../../";
import editImage from "../../../images/edit.svg";
import "./sessionDetails.css";
import { useSelector } from "react-redux";

const SessionDetails = () => {
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
              Sesión del {moment(session.createdAt).format("D/MM")}
            </h1>
          )}
          <div className="list-container">
            <div className="edit-session" onClick={() => setEditing(true)}>
              <img className="btn-small" src={editImage} alt="Edit" />
              <p>Editar sesión</p>
            </div>
            {session.exercises.map((exercise) => (
              <ExerciseSummary
                name={exercise.name}
                id={exercise.id}
                amount={exercise.amount}
                weight={exercise.weight}
                sets={exercise.sets}
                key={exercise.id}
              />
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
