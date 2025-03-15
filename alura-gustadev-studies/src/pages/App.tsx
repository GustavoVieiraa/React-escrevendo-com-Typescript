import React, { useState } from "react";
import Formulario from "../components/Formulario/Formulario";
import List from "../components/List/List";
import style from "../pages/App.module.scss";
import { Cronometro } from "../components/Cronometro/Cronometro";
import { ITarefa } from "../types/ITarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
