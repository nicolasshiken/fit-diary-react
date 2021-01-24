import "./exerciseSummary.css";
import deleteBtn from "../../../images/delete.svg";
import editBtn from "../../../images/edit.svg";

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
  setCurrentId,
  setExercise,
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
        <div className="exercise-btn-container">
          <button className="delete-btn" onClick={() => handleDelete(id)}>
            <img src={deleteBtn} alt="Delete" />
          </button>
          <button className="edit-btn" onClick={() => setCurrentId(id)}>
            <img src={editBtn} alt="Edit" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ExerciseSummary;
