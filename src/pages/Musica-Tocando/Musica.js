import React, { useRef, useState, useEffect } from "react";
import "./Musica.css";
import voltar_svg from "../svgs/ocultar_musica.svg";
import tres_pontos from "../svgs/tres_pontos.svg";
import music from "../svgs/music.mp3";
import aleatorio from "../svgs/random.svg";
import anterior from "../svgs/before.svg";
import pause from "../svgs/pause.svg";
import proxima from "../svgs/next.svg";
import repetir from "../svgs/repeat.svg";
import play from "../svgs/play.svg";
import Navbar from "../componentes/navbar";

function Musica_Tocando() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleRewind = () => {
    audioRef.current.currentTime = Math.max(
      audioRef.current.currentTime - 10,
      0
    );
  };

  const handleFastForward = () => {
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 10,
      audioRef.current.duration
    );
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
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
      <div className="rounded-4 overflow-hidden mt-5 mb-3">
        <img
          src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
          alt="capa"
          className="w-100"
        />
      </div>
      <div>
        <div>
          <h3 className="white mb-0">Bohemian Rhapsody</h3>
          <p className="gray">Queen</p>
        </div>
        <div className="temporizador mb-2">
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="d-flex justify-content-between white mb-3">
          <div className="ExtraLight">{formatTime(currentTime)}</div>
          <div className="ExtraLight">{formatTime(duration)}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center justify-content-center">
          <div>
            <img src={aleatorio} alt="aleatorio" />
          </div>
          <div className="d-flex gap-3 elem">
            <img
              className="elem"
              src={anterior}
              alt="anterior"
              onClick={handleRewind}
              style={{ cursor: "pointer" }}
            />
            <img
              className="elem"
              src={isPlaying ? pause : play}
              alt={isPlaying ? "pause" : "play"}
              onClick={togglePlayPause}
              style={{ cursor: "pointer" }}
            />
            <img
              className="elem"
              src={proxima}
              alt="proxima"
              onClick={handleFastForward}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <img src={repetir} alt="repetir" />
          </div>
        </div>
      </div>
      <Navbar />
      <audio ref={audioRef}>
        <source src={music} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default Musica_Tocando;
