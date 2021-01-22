import "./exerciseSummary.css";

const ExerciseSummary = ({ name, category, weight, amount, sets }) => {
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
    </div>
  );
};

export default ExerciseSummary;
