import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { AddExerciseForm, ExerciseSummary } from "../..";
import { updateSession } from "../../../actions/sessions";

const EditSession = ({ session, setEditing }) => {
  const dispatch = useDispatch();
  const [updatedSession, setUpdatedSession] = useState(session);
  const [error, setError] = useState("");
  const [currentId, setCurrentId] = useState(null);
  const [exercise, setExercise] = useState({
    name: "",
    category: "",
    weight: "",
    amount: "",
    sets: "",
    id: null,
  });

  const handleUpdate = (id, updatedSession) => {
    if (updatedSession.exercises.length !== 0) {
      dispatch(updateSession(id, updatedSession));
      setEditing(false);
    } else {
      setError("Debes añadir al menos un ejercicio!");
    }
  };

  const handleCancel = () => {
    currentId ? setCurrentId(false) : setEditing(false);
  };

  return (
    <>
      <h1 className="main-title">
        Editando sesión del {moment(session.createdAt).format("D/MM")}
      </h1>
      <div className="list-container">
        {updatedSession.exercises.map((exercise) => (
          <ExerciseSummary
            key={exercise.id}
            id={exercise.id}
            ableToDelete={true}
            name={exercise.name}
            weight={exercise.weight}
            amount={exercise.amount}
            sets={exercise.sets}
            setSession={setUpdatedSession}
            session={updatedSession}
            setCurrentId={setCurrentId}
            setExercise={setExercise}
          />
        ))}
        <AddExerciseForm
          session={updatedSession}
          setSession={setUpdatedSession}
          setError={setError}
          currentId={currentId}
          setCurrentId={setCurrentId}
          exercise={exercise}
          setExercise={setExercise}
        />
        {error && <p className="error">{error}</p>}
        {!currentId && (
          <button
            className="cta"
            onClick={() => handleUpdate(session._id, updatedSession)}
          >
            Finalizar
          </button>
        )}
        <p className="error" onClick={() => handleCancel()}>
          Cancelar
        </p>
      </div>
    </>
  );
};

export default EditSession;
