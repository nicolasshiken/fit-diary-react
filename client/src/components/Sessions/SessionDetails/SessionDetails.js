import { url } from "../../../api";
import moment from "moment";
import { useParams } from "react-router-dom";
import { ExerciseSummary } from "../../";
import useFetch from "../../../hooks/useFetch";

const SessionDetails = () => {
  const { _id } = useParams();
  const { data: session, isPending, error } = useFetch(
    `${url}/sessions/${_id}`
  );

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && (
        <div className="main-container">
          <h1 className="main-title"> Cargando sesión...</h1>
        </div>
      )}
      {session && (
        <>
          {session.name && <h1 className="main-title">{session.name}</h1>}
          {!session.name && (
            <h1 className="main-title">
              Sesión del {moment(session.createdAt).format("D/MM")}
            </h1>
          )}
          <div className="list-container">
            {session.exercises.map((exercise) => (
              <ExerciseSummary
                name={exercise.name}
                id={exercise.id}
                amount={exercise.amount}
                weight={exercise.weight}
                sets={exercise.sets}
                key={exercise.id}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SessionDetails;
