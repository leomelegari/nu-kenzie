import "./style.css";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div className="container-start">
      <div className="text-btn">
        <div className="logo-start-white">
          <img src="./logoBranco.svg" alt="" />
        </div>
        <div className="text-start">
          <h1>Centralize o controle das suas finanças</h1>
        </div>
        <p>de forma rápida e segura</p>
        <div className="btn">
          <button onClick={() => setIsLoggedIn(true)}>Iniciar</button>
        </div>
      </div>

      <div className="window-img">
        <img src="./loginNuKenzie.svg" alt="" />
      </div>
    </div>
  );
};

export default Login;
