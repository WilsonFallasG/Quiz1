import React, { useState } from 'react';

function Calculadora() {
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(result + 1);
  };

  const handleSubtract = () => {
    setResult(result - 1);
  };

  const handleReset = () => {
    setResult(0);
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <p>Resultado: {result}</p>
      <button onClick={handleAdd}>Sumar</button>
      <button onClick={handleSubtract}>Restar</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
}

export default Calculadora;
