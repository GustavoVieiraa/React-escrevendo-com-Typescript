import Button from "../Button/Button";
import Relogio from "./Relogio/Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/date";

export function Cronometro() {
  console.log("conversão: ", tempoParaSegundos("01:01:01"));

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button name="Começar!" />
    </div>
  );
}
