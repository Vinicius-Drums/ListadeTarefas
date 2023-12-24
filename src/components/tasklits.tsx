// src/components/Tasklist.tsx
import React, { useState } from "react";
import "./listadetarefas.css";

interface Tarefa {
  texto: string;
  concluida: boolean;
}

const Listadetarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
      setNovaTarefa("");
    }
  };

  const alternarTarefa = (indice: number) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[indice].concluida =
      !tarefasAtualizadas[indice].concluida;
    setTarefas(tarefasAtualizadas);
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => alternarTarefa(indice)}
            />
            {tarefa.texto}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      </div>
    </div>
  );
};

export default Listadetarefas;
