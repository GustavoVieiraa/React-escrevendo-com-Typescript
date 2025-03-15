import React from "react";
import Formulario from "../components/Formulario/Formulario";
import List from "../components/List/List";
import style from "../pages/App.module.scss";
import { Cronometro } from "../components/Cronometro/Cronometro";

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <List />
      <Cronometro />
    </div>
  );
}

export default App;
