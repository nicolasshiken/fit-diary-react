import moment from "moment";
import { url } from "../../api";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { ExerciseSummary } from "../";

const SessionDetails = () => {
  const { _id } = useParams();
  const { data: session, isPending, error } = useFetch(
    `${url}/sessions/${_id}`
  );

  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {session && (
        <>
          {session.name && <h1 className="list-title">{session.name}</h1>}
          {!session.name && (
            <h1 className="list-title">
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
