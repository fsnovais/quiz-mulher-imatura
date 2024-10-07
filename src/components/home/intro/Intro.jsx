import "./intro.scss";
import { HashLink as Link } from "react-router-hash-link";

export default function Intro() {
  return (
    <div className="home-card">
      <div className="left">
        <div className="intro-title">
        <span>Qual o seu nível de maturidade?</span>
        </div>
        <div className="home-info">
          <span>Vamos avaliar suas motivações para identificar em qual nível de maturidade está a sua personalidade.</span>
        </div>
        <div className="home-info">
          <span>
            Amadurecer é o nosso destino.
            @FernandaBoaventura
          </span>
        </div>
        <Link className="intro-button" to="/questoes">
          Iniciar o teste
        </Link>
      </div>
      <div className="right">
        <img src="assets/pastora.jpg" alt="mulher" />
      </div>
    </div>
  );
}
