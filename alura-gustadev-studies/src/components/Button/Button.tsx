import React from "react";
import style from "./Botao.module.scss";

class Button extends React.Component<{
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
    const { type = "button" } = this.props;

    return (
      <button type={type} className={style.botao}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
