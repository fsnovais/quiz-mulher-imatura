import "./Imatura.scss";
import { HashLink as Link } from "react-router-hash-link";

export default function Imatura() {
  return (
    <div className="result1-card">
      <div className="left-result1">
        <div className="title-result1">
        <span>Você está uma Mulher Imatura</span>
        </div>
        <div className="page1-info">
          <span className="result1-Info">
          Uma mulher Não se perdoa<br/>
          Uma mulher imatura tem Dificuldade de reconhecer suas falhas<br/>
          Uma mulher imatura Não tem humildade<br/>
          Uma mulher imatura não luta para amadurecer porque ela é sempre a vítima<br/>
          A mulher imatura Só sabe reclamar<br/>
          A mulher imatura é Orgulhosa<br/>
          A mulher imatura não resiste a nada, se quebra, não consegue se reerguer a nada <br/>
          A mulher imatura se preocupa apenas consigo mesmo.<br/>
          A mulher imatura apenas discursa e inventa desculpas.<br/>
          A mulher imatura não pode ter um desvio na rotina, no planejamento, na vida que entra em desespero.<br/>
          A mulher imatura se prostra diante de uma crise e nunca reconhece seus erros e responsabilidade.<br/>
          A mulher imatura está sempre em busca de aprovação, validação e afeto, por isso tudo que faz é pensando no que terá de retorno. <br/>
          A mulher imatura não consegue celebrar o sucesso de outras mulheres porque isso fere a sua autoestima.<br/>
          A mulher imatura causa conflitos sem perceber que faz outras pessoas sofrerem. <br/>
          </span>
        </div>
        <Link className="button1" to="/">
          Voltar ao início
        </Link>
      </div>
      <div className="right-result1">
        <img src="assets/Mulher1.png" alt="mulher" />
      </div>
    </div>
  );
}
