import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import dayjs from "dayjs";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("profile"));
  const profileSessions = useSelector((state) => state.sessions.slice(0, 3));
  const profileMeals = useSelector((state) => state.meals.slice(0, 3));
  const profile = useSelector((state) => state.profile);

  if (!user?.result?.name) {
    history.push("/auth");
  }

  return (
    <>
      <h1 className="main-title">Perfil de {user?.result?.name}</h1>

      <div className="list-container">
        <ProfileInfo profile={profile} />

        <div className="profile-item-container">
          <h2 className="container-title">Ultimas sesiones:</h2>
          {profileSessions.map((session) => (
            <h3 key={session._id} className="container-title">
              Sesión del {dayjs(session.createdAt).format("DD/MM")}
            </h3>
          ))}
          <Link to="/sessions" className="error">
            Ver todas...
          </Link>
        </div>

        <div className="profile-item-container">
          <h2 className="container-title">Ultimas comidas:</h2>
          {profileMeals.map((meal) => (
            <h3 key={meal._id} className="container-title">
              {meal.title} - {dayjs(meal.date).format("DD/MM")}
            </h3>
          ))}
          <Link to="/meals" className="error">
            Ver todas...
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
