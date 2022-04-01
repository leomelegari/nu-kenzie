import { useState } from "react";
import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(1);

  const addNewTransaction = (newItem) => {
    if(newItem.description === "" || newItem.value === "" || newItem.type === 1){
      alert('Descrição/valor/tipo não podem ficar vazios')
    } else {
    setListTransactions([...listTransactions, newItem]);
    }
  };



  const list = [
    { id: 1, name: "Selecione" },
    { id: 2, name: "Entrada" },
    { id: 3, name: "Saída" },
  ];

  function prevent(e) {
    e.preventDefault();

    setValue("");
    setDescription("");
    setType(1);
  }

  return (
    <div className="container-form">
      <form onSubmit={prevent}>
        <div className="input inputDesc">
          <label htmlFor="insertDesc">Descrição</label>
          <input
            type="text"
            id="insertDesc"
            className="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Digite aqui sua descrição"
          />
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="container-value-select">
          <div className="input inputValue">
            <label htmlFor="insertValue"> Valor </label>
            <input
              type="number"
              id="insertValue"
              className="value"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Insira o valor"
            />
          </div>
          <div className="input inputSelect">
            <label htmlFor="insertType">Tipo</label>
            <select
              className="type"
              id="insertType"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              {list.map((item, index) => {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => addNewTransaction({ description, type, value })}
        >
          Inserir valor
        </button>
      </form>
    </div>
  );
};

export default Form;
