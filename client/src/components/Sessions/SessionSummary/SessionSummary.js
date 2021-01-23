import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { deleteSession } from "../../../actions/sessions";
import "./sessionSummary.css";
import editImage from "../../../images/edit.svg";
import deleteImage from "../../../images/delete.svg";

const SessionSummary = ({ createdAt, name, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    if (window.confirm("Seguro desea eliminar esta sesión?"))
      dispatch(deleteSession(_id));
  };

  const handleEdit = (_id) => {};

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
        <Link to={`/sessions/${id}/edit`}>
          <img src={editImage} alt="Edit" onClick={() => handleEdit(id)} />
        </Link>
        <img src={deleteImage} alt="Delete" onClick={() => handleDelete(id)} />
      </div>
    </div>
  );
};

export default SessionSummary;
