import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Login from './components/Login';
import TotalMoney from './components/TotalMoney';
import List from './components/List';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modal, setModal] = useState(false)
  const [listTransactions, setListTransactions] = useState([]);
  const [filtro, setFiltro] = useState("Todos");

  const handleRemove = (idToRemove) => {
    const index = Number(listTransactions.indexOf(idToRemove));
    if (index > -1) {
      listTransactions.splice(index, 1);
      setListTransactions([...listTransactions])
    }
  }

  return (
    <header className="App-header">
      {modal === false ? (isLoggedIn === false ?
        <Login setIsLoggedIn={setIsLoggedIn} />
        :
        <div className='container-main'>
          <div className='div-header'>
            <div className='header'>
              <img src='./logoPreto.svg' alt='logo NuKenzie' />
              <button onClick={() => setIsLoggedIn(false)}>Início</button>
            </div>
          </div>
          <div className='container-body'>
            <div>
              <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
              <TotalMoney list={listTransactions} filtro={filtro}/>
            </div>
            <div className='container-resumo'>
              <div className='resumo'>
                <p>Resumo Financeiro</p>
                <button onClick={() => setFiltro("Todos")}>Todos</button>
                <button onClick={() => setFiltro("Entrada")}>Entradas</button>
                <button onClick={() => setFiltro("Saída")}>Despesas</button>
              </div>
              <div className='container-resumo-card'>
                <List list={listTransactions} handleRemove={handleRemove} filtro={filtro}/>
              </div>
            </div>
          </div>
        </div>) : null}

    </header>

  );
}

export default App;
