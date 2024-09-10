import "./primeira.css";
import logo from './img/logo.svg'

function primeira() {
  return (
    <div className="container-primeira">
      <div className="center">
        <img src={logo} id="logo" />
      </div>
      <div>
        <p id="texto">Produza, escute e vivêncie o melhor da música!</p>
      </div>
      <div className="botoes">
        <div id="button">
          <a id="registro">Registrar</a>
        </div>
        <div id="entrar">
          <a>Entrar</a>
        </div>
      </div>
    </div>
  );
}

export default primeira;
