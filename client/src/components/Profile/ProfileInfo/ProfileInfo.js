import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import editImg from "../../../images/edit.svg";
import { updateProfile } from "../../../actions/profile";

const ProfileInfo = ({ profile }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    weight: null,
    height: null,
    age: null,
  });

  useEffect(() => {
    setFormData(profile);
  }, [dispatch, profile]);

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData, setEditing));
  };

  return (
    <form className="profile-item-container" onSubmit={handleSubmit}>
      {editing && <h2 className="container-title">Actualizar perfil</h2>}
      <div className="container-buttons">
        <img
          src={editImg}
          alt="Edit"
          onClick={() => setEditing((prev) => !prev)}
        />
      </div>
      {!editing ? (
        <h3 className="container-title">Peso: {profile?.weight} kg.</h3>
      ) : (
        <div className="form-row">
          <div className="form-row-item">
            <h3 className="container-title">Peso:</h3>
            <input
              type="number"
              value={formData.weight}
              name="weight"
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      {!editing ? (
        <h3 className="container-title">Altura: {profile?.height} cm.</h3>
      ) : (
        <div className="form-row">
          <div className="form-row-item">
            <h3 className="container-title">Altura:</h3>
            <input
              type="number"
              value={formData.height}
              name="height"
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      {!editing ? (
        <h3 className="container-title">Edad: {profile?.age} años</h3>
      ) : (
        <div className="form-row">
          <div className="form-row-item">
            <h3 className="container-title">Edad:</h3>
            <input
              type="number"
              value={formData.age}
              name="age"
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      {editing && <button className="cta">editar</button>}
    </form>
  );
};

export default ProfileInfo;
