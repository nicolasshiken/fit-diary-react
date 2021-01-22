import { useState } from "react";
import "./addExerciseForm.css";

const AddExerciseForm = ({ session, setSession }) => {
  const [exercise, setExercise] = useState({
    name: "",
    category: "",
    weight: "",
    amount: "",
    sets: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSession({
      ...session,
      exercises: [...session.exercises, exercise],
    });
  };

  const handleChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-row-item">
          <label>Ejercicio</label>
          <input required type="text" name="name" onChange={handleChange} />
        </div>
        <div className="form-row-item">
          <label>Categoria</label>
          <input required type="text" name="category" onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-item">
          <label className="small">Carga</label>
          <input required type="text" name="weight" onChange={handleChange} />
        </div>
        <div className="form-row-item">
          <label className="small">Cantidad</label>
          <input required type="text" name="amount" onChange={handleChange} />
        </div>
        <div className="form-row-item">
          <label className="small">Series</label>
          <input required type="number" name="sets" onChange={handleChange} />
        </div>
      </div>
      <button type="submit" className="add-btn"></button>
    </form>
  );
};

export default AddExerciseForm;
