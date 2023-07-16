import "../css/component/Drop.scss";

export default function Nav({ contact }) {
  return (
    <div className={`drop-content-${contact ? "visible" : "hidden"}`}>
      <div className="page">
        <a href="mailto:philipdykesphotographer@gmail.com">email</a>
      </div>
      <div className="page">
        <h2>613-286-6265</h2>
      </div>
    </div>
  );
}
