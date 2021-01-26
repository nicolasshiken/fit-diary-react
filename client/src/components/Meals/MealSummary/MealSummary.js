import dayjs from "dayjs";
import "./mealSummary.css";
import deleteImage from "../../../images/delete.svg";
import { deleteMeal } from "../../../actions/meals";
import { useDispatch } from "react-redux";

const MealSummary = ({ details, id, title, date }) => {
  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    if (window.confirm("Seguro desea eliminar esta sesión?"))
      dispatch(deleteMeal(_id));
  };

  return (
    <div className="meal-container container">
      <h2 className="container-title">
        {title} - {dayjs(date).format("DD-MM")}
      </h2>
      <p className="exercise-details">{details}</p>
      <div className="container-buttons">
        <img src={deleteImage} alt="Delete" onClick={() => handleDelete(id)} />
      </div>
    </div>
  );
};

export default MealSummary;
