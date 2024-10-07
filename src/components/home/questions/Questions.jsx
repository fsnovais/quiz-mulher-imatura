import "./questions.scss";
import React, {useState} from "react";
import data from "../../data/quiz2.json";
import { useHistory } from 'react-router-dom';

export default function Questions() {
  const questions = data.data ?? [];
  const [updateCheckedState, setUpdateCheckedState] = useState(Array(questions.length).fill(null));
  const history = useHistory();

  const changeHandler = () => {
    const counts = {
      a: updateCheckedState.filter(x => x === 0).length, // Atitude 1
      b: updateCheckedState.filter(x => x === 1).length, // Atitude 2
      c: updateCheckedState.filter(x => x === 2).length, // Atitude 3
      d: updateCheckedState.filter(x => x === 3).length, // Atitude 4
    };
  
    // Contar quantas atitudes imaturas (1, 2 ou 3) foram selecionadas
    const imaturaCount = counts.a + counts.b + counts.c;
  
    let page = '';
  
    // Redirecionar para "imatura" se 2 ou mais respostas forem das opções 1, 2 ou 3
    if (imaturaCount >= 2) {
      page = 'imatura'; // Mulher imatura
    } else if (counts.d >= 2) {
      page = 'madura'; // Mulher madura
    }
  
    // Redirecionar para a página correspondente
    if (page) {
      history.push(`/${page}`);
    }
  };

  return (
    <div className="container-questions">
      {questions.map((q, i) => (
        <div key={i} className="resposta">
          <span>Situação hipotética:</span>
          <div className="infoPerguntas">
            <div className="pergunta">{q.question} Você:</div>
            <div className="grupoResposta">
              {q.options.map((r, j) => (
                <div key={j}>
                  <label>
                    <input
                      className="radio"
                      type="radio"
                      name={i}
                      value={r.answer}
                      onChange={() => {
                        const newState = [...updateCheckedState];
                        newState[i] = j;
                        setUpdateCheckedState(newState);
                      }}
                    />
                    {r.answer}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <button className="link" onClick={changeHandler}>Resultado</button>
    </div>
  );
}
