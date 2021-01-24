import { Link } from "react-router-dom";
import addCircle from "../../../images/add_circle.svg";
import { useSelector } from "react-redux";
import { MealSummary } from "../..";

const MealList = () => {
  const meals = useSelector((state) => state.meals);

  return (
    <>
      <h1 className="main-title">Comidas.</h1>
      <Link to="/add-meal" className="add-btn">
        <img src={addCircle} alt="Agregar" />
      </Link>
      <div className="list-container">
        {meals &&
          meals.map((meal) => (
            <MealSummary
              date={meal.date}
              title={meal.title}
              details={meal.details}
              key={meal._id}
              id={meal._id}
            />
          ))}
      </div>
    </>
  );
};

export default MealList;
