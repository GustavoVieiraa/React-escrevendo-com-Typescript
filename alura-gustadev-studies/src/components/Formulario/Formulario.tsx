import React from "react";
import Button from "../Button/Button";
import style from "./Formulario.module.scss";

class Formulario extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("state: ", this.state);
  }

  render() {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            onChange={(event) =>
              this.setState({ ...this.state, tarefa: event.target.value })
            }
            value={this.state.tarefa}
            placeholder="O que você quer estudar"
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            onChange={(event) =>
              this.setState({ ...this.state, tempo: event.target.value })
            }
            value={this.state.tempo}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button name="Adicionar" />
      </form>
    );
  }
}

export default Formulario;
