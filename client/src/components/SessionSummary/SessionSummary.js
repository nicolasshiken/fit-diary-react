import { Link } from "react-router-dom";
import "./sessionSummary.css";
import editImage from "../../images/edit.svg";
import deleteImage from "../../images/delete.svg";

const SessionSummary = () => {
  return (
    <div className="container">
      <Link>
        <h2 className="container-title">Sesion del 21/1/2021</h2>
      </Link>
      <div className="session-summary-buttons">
        <img src={editImage} alt="Edit" />
        <img src={deleteImage} alt="Delete" />
      </div>
    </div>
  );
};

export default SessionSummary;
