import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import moment from "moment";
import { createMeal } from "../../../actions/meals";

const AddMeal = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [meal, setMeal] = useState({
    details: "",
    title: "",
    date: moment(Date.now()).format("yyyy-MM-DD"),
    proteins: 0,
    fat: 0,
    carbos: 0,
    calories: 0,
  });

  const handleChange = (e) => {
    setMeal({
      ...meal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createMeal(meal)).then(history.push("/meals"));
  };

  return (
    <>
      <h1 className="main-title">Agregar comida.</h1>
      <div className="list-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-row-item">
              <label>Fecha</label>
              <input
                required
                type="date"
                name="date"
                value={meal.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-row-item">
              <label>Titulo</label>
              <input
                required
                type="text"
                name="title"
                value={meal.title}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-row-item">
              <label>Detalles</label>
              <input
                required
                type="text"
                name="details"
                value={meal.details}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-row-item">
              <label className="small">Proteinas</label>
              <input
                type="text"
                name="proteins"
                value={meal.proteins}
                onChange={handleChange}
              />
            </div>

            <div className="form-row-item">
              <label className="small">Grasas</label>
              <input
                type="text"
                name="fat"
                value={meal.fat}
                onChange={handleChange}
              />
            </div>

            <div className="form-row-item">
              <label className="small">Hidratos</label>
              <input
                type="text"
                name="carbos"
                value={meal.carbos}
                onChange={handleChange}
              />
            </div>

            <div className="form-row-item">
              <label className="small">Calorias</label>
              <input
                type="text"
                name="calories"
                value={meal.calories}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="cta">Finalizar</button>

          <Link to="/meals" className="error">
            Cancelar
          </Link>
        </form>
      </div>
    </>
  );
};

export default AddMeal;
