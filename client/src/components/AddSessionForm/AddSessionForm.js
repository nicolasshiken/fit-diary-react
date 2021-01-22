import { useState } from "react";
import { AddExerciseForm, ExerciseSummary } from "..";
import "./addSessionForm.css";

const AddSessionForm = () => {
  const [session, setSession] = useState({
    name: "",
    exercises: [],
  });

  return (
    <>
      <h1 className="list-title">Agregar sesión de entrenamiento</h1>
      <div className="list-container">
        {session.exercises.map((exercise) => (
          <ExerciseSummary
            name={exercise.name}
            weight={exercise.weight}
            amount={exercise.amount}
            sets={exercise.sets}
          />
        ))}
        <AddExerciseForm session={session} setSession={setSession} />
        <button className="cta">FINALIZAR</button>
      </div>
    </>
  );
};

export default AddSessionForm;
