import { useState } from "react";
import "./addExerciseForm.css";
import addCircle from "../../../images/add_circle.svg";

const AddExerciseForm = ({ session, setSession, setError }) => {
  const [exercise, setExercise] = useState({
    name: "",
    category: "",
    weight: "",
    amount: "",
    sets: "",
    id: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExercise = {
      ...exercise,
      id: Math.random(),
    };

    setSession({
      ...session,
      exercises: [...session.exercises, newExercise],
    });

    setExercise({
      name: "",
      category: "",
      weight: "",
      amount: "",
      sets: "",
      id: null,
    });

    setError(null);
  };

  const handleChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

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
      <button type="submit" className="add-btn">
        <img src={addCircle} alt="Agregar" />
        <p>Agregar ejercicio</p>
      </button>
    </form>
  );
};

export default AddExerciseForm;
