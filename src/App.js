import React, { useEffect } from 'react';
import "./App.css";
import voltar_svg from "./svgs/ocultar_musica.svg";
import tres_pontos from "./svgs/tres_pontos.svg";
import temporizador from "./svgs/temporizador.svg";
import music from "./svgs/music.mp3";
import aleatorio from "./svgs/random.svg";
import anterior from "./svgs/before.svg";
import pause from "./svgs/pause.svg";
import proxima from "./svgs/next.svg";
import repetir from "./svgs/repeat.svg";
import play from './svgs/play.svg'
import Navbar from './componentes/navbar'

function App() {
  useEffect(() => {
    const player = document.getElementById('player');
    const playPauseButton = document.querySelector('[alt="pause"]');
    const prevButton = document.querySelector('[alt="anterior"]');
    const nextButton = document.querySelector('[alt="proxima"]');
    
    function togglePlayPause() {
      if (player.paused) {
        player.play();
        playPauseButton.src = './svgs/pause.svg'; // Troca o ícone para pause
      } else {
        player.pause();
        playPauseButton.src = './svgs/play.svg'; // Troca o ícone para play
      }
    }

    function skipForward() {
      player.currentTime += 10;
    }

    function skipBackward() {
      player.currentTime -= 10;
    }

    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', skipForward);
    prevButton.addEventListener('click', skipBackward);

    return () => {
      playPauseButton.removeEventListener('click', togglePlayPause);
      nextButton.removeEventListener('click', skipForward);
      prevButton.removeEventListener('click', skipBackward);
    };
  }, []);

  return (
    <div className="container_geral">
      <div className="d-flex flex-row justify-content-between">
        <div>
          <img src={voltar_svg} alt="voltar" />
        </div>
        <div>
          <img src={tres_pontos} alt="configurações" />
        </div>
      </div>
      <div className="w-85 rounded-4 overflow-hidden mt-5 mb-5">
        <img
          src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
          alt="capa"
          className="w-100"
        />
      </div>
      <div>
        <div>
          <h3 className="white">Bohemian Rhapsody</h3>
          <p className="gray">Queen</p>
        </div>
        <div className='temporizador'>
          <img src={temporizador} alt="" className='temporizador'/>
        </div>
        <div className="d-flex justify-content-between white mb-5">
          <div>0:00</div>
          <div>6:65</div>
        </div>
        <div className="d-flex justify-content-between align-items-center justify-content-center">
          <div>
            <img src={aleatorio} alt="aletorio" />
          </div>
          <div className="d-flex gap-3">
            <img src={anterior} alt="anterior" />
            <img src={play} alt="pause" />
            <img src={proxima} alt="proxima" />
          </div>
          <div>
            <img src={repetir} alt="repetir" />
          </div>
        </div>
      </div>
      <Navbar />
      <audio id="player">
        <source src={music} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
