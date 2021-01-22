import { Link } from "react-router-dom";
import { SessionSummary } from "..";

const SessionList = () => {
  return (
    <>
      <h1 className="list-title">Sessions</h1>
      <Link to="/add-session" className="add-btn" />
      <div className="list-container">
        <SessionSummary />
      </div>
    </>
  );
};

export default SessionList;
