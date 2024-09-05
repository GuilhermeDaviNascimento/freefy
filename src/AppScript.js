document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const playPauseButton = document.querySelector('[alt="pause"]');
    const prevButton = document.querySelector('[alt="anterior"]');
    const nextButton = document.querySelector('[alt="proxima"]');
    
    // Função para alternar entre play e pause
    function togglePlayPause() {
      if (player.paused) {
        player.play();
        playPauseButton.src = `./svgs/pause.svg`; // Troca o ícone para pause
      } else {
        player.pause();
        playPauseButton.src = `./svgs/play.svg`; // Troca o ícone para play
      }
    }
  
    // Função para avançar 10 segundos
    function skipForward() {
      player.currentTime += 10;
    }
  
    // Função para retroceder 10 segundos
    function skipBackward() {
      player.currentTime -= 10;
    }
  
    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', skipForward);
    prevButton.addEventListener('click', skipBackward);
  });
  