import "./resistente.scss";
import { HashLink as Link } from "react-router-hash-link";

export default function Resistente() {
  return (
    <div className="result3-card">
      <div className="left-result3">
        <div className="title-result3">
        <span>Você está uma Mulher Resistente</span>
        </div>
        <div className="page3-info">
        <span className="result3-Info">
        Não se moldam.<br/>
        Não se perdoam.<br/>
        Dificuldade de reconhecer suas falhas.<br/>
        Não tem humildade.<br/>
        Não lutam para mudar.<br/>
        Só sabem reclamar.<br/>
        Orgulhosas.</span>
        </div>
        <Link className="button3" to="/">
          Voltar ao início
        </Link>
      </div>
      <div className="right-result3">
        <img src="assets/Mulher2.png" alt="mulher" />
      </div>
    </div>
  );
}
