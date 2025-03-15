import React from "react";
import style from "./Botao.module.scss";

class Button extends React.Component<{ name: string }> {
  render() {
    return <button className={style.botao}>{this.props.name}</button>;
  }
}

export default Button;
