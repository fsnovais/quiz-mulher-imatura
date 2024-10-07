import "./antifragil.scss";
import { HashLink as Link } from "react-router-hash-link";

export default function Antifragil() {
  return (
    <div className="result2-card">
      <div className="left-result2">
        <div className="title-result2">
        <span>Voce é uma Mulher Camada Madura
        </span>
        </div>
        <div className="page2-info">
        <span className="result2-Info">
        Voce é uma Mulher Camada Madura<br/>
        A mulher madura não é inerte, ela se permite moldar, lapidar, melhorar;  <br/>
        A mulher madura se permite errar, ela se permite correr riscos sem medo;<br/>
        A mulher madura pensa no coletivo, pensa no outro. <br/>
        A mulher madura assume riscos de fracasso, rejeição, julgamento, desrespeito, sacrifícios em prol de algo maior; <br/>
        A Mulher madura avança na vida sem medo de errar. <br/>
        A mulher madura aprende com seus erros e é empática quanto ao erros dos outros;<br/>
        A mulher madura sai de uma crise sem se amargurar, ela se reinventa; <br/>
        A mulher madura acredita que crises são meios de crescimento;<br/>
        A mulher madura confia, impulsiona e serve pessoas.<br/>
        </span>
        </div>
        <Link className="button2" to="/">
          Voltar ao início
        </Link>
      </div>
      <div className="right-result2">
        <img src="assets/Mulher3.png" alt="mulher" />
      </div>
    </div>
  );
}
