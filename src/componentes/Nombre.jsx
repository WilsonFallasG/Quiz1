import React, { useState } from 'react';

function Nombre() {
  const [name, setName] = useState('No definido');

  const handleNameChange = (event) => {
    setName(event.target.value || 'No definido');
  };

  return (
    <div>
      <h2>Su nombre es: </h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Su nombre es: {name}</p>
      
    </div>
  );
}

export default Nombre;