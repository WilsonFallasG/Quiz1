import React, { useState } from 'react';
import './styles.css';

function Contador() {
  const [likes, setLikes] = useState(0);

  const aumentarLikes = () => {
    setLikes(likes + 1);
  };

  const disminuirLikes = () => {
    setLikes(likes - 1);
  };

  return (
    <div className="contador-container">
      <h2>Contador de Likes</h2>
      <div className="contador">
        <button onClick={disminuirLikes}>disLikes</button>
        <span>{likes}</span>
        <button onClick={aumentarLikes}>Likes</button>
      </div>
    </div>
  );
}

export default Contador;
