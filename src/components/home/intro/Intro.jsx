import "./intro.scss";
import { HashLink as Link } from "react-router-hash-link";

export default function Intro() {
  return (
    <div className="home-card">
      <div className="left">
        <div className="intro-title">
        <span>Você Está MADURA ou IMATURA?</span>
        </div>
        <div className="home-info">
          <span>Vamos avaliar suas motivações para identificar em qual nível de maturidade está a sua personalidade.</span>
        </div>
        <div className="home-info">
          <div className="mobile-img">
            <img src="assets/pastora.jpg" alt="mulher" />
          </div>
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
