import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddExerciseForm, ExerciseSummary } from "..";
import { createSession } from "../../actions/sessions";
import "./addSession.css";

const AddSessionForm = () => {
  const history = useHistory();

  const [session, setSession] = useState({
    name: "",
    exercises: [],
  });

  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(createSession(session)).then(history.push("/"));
  };

  return (
    <>
      <h1 className="list-title">Agregar sesión de entrenamiento</h1>
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
        <AddExerciseForm session={session} setSession={setSession} />
        <button className="cta" onClick={handleCreate}>
          FINALIZAR
        </button>
      </div>
    </>
  );
};

export default AddSessionForm;
