import addCircle from "../../../images/add_circle.svg";
import { useEffect } from "react";

const AddExerciseForm = ({
  session,
  setSession,
  setError,
  currentId,
  setCurrentId,
  exercise,
  setExercise,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      const updatedExercises = session.exercises.filter(
        (exercise) => exercise.id !== currentId
      );

      const newExercise = {
        ...exercise,
        id: Math.random(),
      };

      setSession({
        ...session,
        exercises: [...updatedExercises, newExercise],
      });
    } else {
      const newExercise = {
        ...exercise,
        id: Math.random(),
      };

      setSession({
        ...session,
        exercises: [...session.exercises, newExercise],
      });
    }

    setExercise({
      name: "",
      category: "",
      weight: "",
      amount: "",
      sets: "",
      id: null,
    });

    setError(null);
    setCurrentId(null);
  };

  const handleChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (currentId) {
      const exerciseToEdit = session.exercises.find(
        (exercise) => exercise.id === currentId
      );
      setExercise(exerciseToEdit);
    }
  }, [currentId, session.exercises, setExercise]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-row-item">
          <label>Ejercicio</label>
          <input
            required
            type="text"
            name="name"
            onChange={handleChange}
            value={exercise.name}
          />
        </div>
        <div className="form-row-item">
          <label>Categoria</label>
          <input
            required
            type="text"
            name="category"
            onChange={handleChange}
            value={exercise.category}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-item">
          <label className="small">Carga</label>
          <input
            required
            type="text"
            name="weight"
            onChange={handleChange}
            value={exercise.weight}
          />
        </div>
        <div className="form-row-item">
          <label className="small">Cantidad</label>
          <input
            required
            type="text"
            name="amount"
            onChange={handleChange}
            value={exercise.amount}
          />
        </div>
        <div className="form-row-item">
          <label className="small">Series</label>
          <input
            required
            type="number"
            name="sets"
            onChange={handleChange}
            value={exercise.sets}
          />
        </div>
      </div>
      {currentId && <button className="cta">Editar</button>}
      {!currentId && (
        <button type="submit" className="add-btn">
          <img src={addCircle} alt="Agregar" />
          <p>Agregar ejercicio</p>
        </button>
      )}
    </form>
  );
};

export default AddExerciseForm;
