import { Link } from "react-router-dom";
import moment from "moment";
import "./sessionSummary.css";
import editImage from "../../images/edit.svg";
import deleteImage from "../../images/delete.svg";

const SessionSummary = ({ createdAt, name, id }) => {
  return (
    <div className="container">
      <Link to={"/sessions/" + id}>
        {name && <h2 className="container-title">{name}</h2>}
        {!name && (
          <h2 className="container-title">
            Sesión del {moment(createdAt).format("D/MM")}
          </h2>
        )}
      </Link>
      <div className="session-summary-buttons">
        <img src={editImage} alt="Edit" />
        <img src={deleteImage} alt="Delete" />
      </div>
    </div>
  );
};

export default SessionSummary;
