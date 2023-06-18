import { Link } from "react-router-dom";
import "../css/component/Drop.scss";

export default function Nav({ vert }) {
  return (
    <div className={`drop-content-${vert ? "visible" : "hidden"}`}>
      <div className="page">
        <Link to="/square">square</Link>
      </div>
      <div className="page">
        <Link to="/plate">plate-polaroid</Link>
      </div>
      <div className="page">
        <Link to="/redpoint">redpoint-western</Link>
      </div>
      <div className="page">
        <Link to="/abu-dhabi">abu dhabi</Link>
      </div>
      <div className="page">
        <Link to="/peabody">peabody</Link>
      </div>
    </div>
  );
}
