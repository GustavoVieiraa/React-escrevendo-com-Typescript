import React from "react";
import style from "./Botao.module.scss";

interface Props {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ onClick, type, name }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {name}
    </button>
  );
}

export default Button;
