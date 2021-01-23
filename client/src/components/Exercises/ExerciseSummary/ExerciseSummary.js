import "./exerciseSummary.css";
import deleteBtn from "../../../images/delete.svg";

const ExerciseSummary = ({
  name,
  category,
  weight,
  amount,
  sets,
  ableToDelete,
  id,
  setSession,
  session,
}) => {
  const handleDelete = (id) => {
    if (window.confirm("Seguro desea eliminar este ejercicio?")) {
      const updatedExercises = session.exercises.filter(
        (exercise) => exercise.id !== id
      );
      setSession({
        ...session,
        exercises: updatedExercises,
      });
    }
  };

  return (
    <div className="container exercise">
      <div className="exercise-item">
        <p className="exercise-details">{name}</p>
      </div>
      <div className="exercise-item">
        <p className="exercise-details">{weight}</p>
      </div>
      <div className="exercise-item">
        <p className="exercise-details">{amount}</p>
      </div>
      <div className="exercise-item">
        <p className="exercise-details">{sets}</p>
      </div>
      {ableToDelete ? (
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          <img src={deleteBtn} alt="Delete" />
        </button>
      ) : null}
    </div>
  );
};

export default ExerciseSummary;
