import { Link } from "react-router-dom";
import { url } from "../../api";
import { SessionSummary } from "..";
import useFetch from "../../hooks/useFetch";

const SessionList = () => {
  const { data: sessions, isPending, error } = useFetch(`${url}/sessions`);
  return (
    <>
      <h1 className="list-title">Sessions</h1>
      <Link to="/add-session" className="add-btn" />
      <div className="list-container">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {sessions &&
          sessions.map((session) => (
            <SessionSummary
              key={session._id}
              createdAt={session.createdAt}
              name={session.name}
              id={session._id}
            />
          ))}
      </div>
    </>
  );
};

export default SessionList;
