import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddExerciseForm, ExerciseSummary } from "../../";
import { createSession } from "../../../actions/sessions";
import "./addSession.css";

const AddSession = ({ title }) => {
  const history = useHistory();

  const [error, setError] = useState("");

  const [session, setSession] = useState({
    name: "",
    exercises: [],
  });

  const dispatch = useDispatch();

  const handleCreate = () => {
    if (session.exercises.length !== 0) {
      dispatch(createSession(session)).then(history.push("/sessions"));
    } else {
      setError("Debes añadir al menos un ejercicio!");
    }
  };

  return (
    <>
      <h1 className="main-title">Agregar sesión de entrenamiento</h1>
      <div className="list-container">
        {session.exercises.map((exercise) => (
          <ExerciseSummary
            key={exercise.id}
            id={exercise.id}
            ableToDelete={true}
            name={exercise.name}
            weight={exercise.weight}
            amount={exercise.amount}
            sets={exercise.sets}
            setSession={setSession}
            session={session}
          />
        ))}
        <AddExerciseForm
          session={session}
          setSession={setSession}
          setError={setError}
        />
        {error && <p className="error">{error}</p>}
        <button className="cta" onClick={handleCreate}>
          FINALIZAR
        </button>
      </div>
    </>
  );
};

export default AddSession;
