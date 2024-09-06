import React from 'react';
import lupa from '../svgs/navbar/Icon-1.svg';
import playlist from '../svgs/navbar/Icon-3.svg';
import upload_musica from '../svgs/navbar/Group 3.svg';
import casa from '../svgs/navbar/Icon.svg';
import usuario from '../svgs/navbar/Icon-2.svg';

function Navbar() {
  return (
    <div className='nav'>
      <img src={lupa} alt="Buscar" />
      <img src={playlist} alt="Playlist" />
      <img src={upload_musica} alt="Upload Música" />
      <img src={casa} alt="Início" />
      <img src={usuario} alt="Usuário" />
    </div>
  );
}

export default Navbar;

