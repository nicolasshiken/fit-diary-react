import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddExerciseForm, ExerciseSummary } from "../../";
import { createSession } from "../../../actions/sessions";

const AddSession = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [currentId, setCurrentId] = useState(null);
  const [session, setSession] = useState({
    name: "",
    exercises: [],
  });
  const [exercise, setExercise] = useState({
    name: "",
    category: "",
    weight: "",
    amount: "",
    sets: "",
    id: null,
  });

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
        {session &&
          session.exercises.map((exercise) => (
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
              setCurrentId={setCurrentId}
              exercise={exercise}
              setExercise={setExercise}
            />
          ))}
        <AddExerciseForm
          session={session}
          setSession={setSession}
          setError={setError}
          currentId={currentId}
          setCurrentId={setCurrentId}
          exercise={exercise}
          setExercise={setExercise}
        />
        {error && <p className="error">{error}</p>}
        {!currentId && (
          <button className="cta" onClick={() => handleCreate()}>
            Finalizar
          </button>
        )}
        <Link to="/sessions" className="error">
          Cancelar.
        </Link>
      </div>
    </>
  );
};

export default AddSession;
