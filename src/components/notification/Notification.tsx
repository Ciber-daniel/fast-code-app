// assets
import search from "../../assets/search.svg";
import question from "../../assets/question.svg";
// styles
import "./Notification.css";

export default function Notification(props: { triggering: boolean }) {
  const { triggering } = props;
  return (
    <section className="notification">
      {!triggering ? (
        <div className="notification">
          <img src={search} alt="" id="search-icon" />
          <h2>¡Busca algo!, lo que quieras</h2>
        </div>
      ) : (
        <div className="notification">
          <img src={question} alt="" id="sad-icon" />
          <h2>Al parecer no existe, al menos en esta dimensión</h2>
        </div>
      )}
    </section>
  );
}
