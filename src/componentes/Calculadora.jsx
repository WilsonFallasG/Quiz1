import React, { useState } from 'react';

function Calculadora() {
  const [result, setResult] = useState(0);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleAdd = () => {
    setResult(Number(inputValue1) + Number(inputValue2));
  };

  const handleSubtract = () => {
    setResult(Number(inputValue1) - Number(inputValue2));
  };

  const handleReset = () => {
    setResult(0);
    setInputValue1('');
    setInputValue2('');
  };

  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <p>Resultado: {result}</p>
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="number" 
          value={inputValue1} 
          onChange={handleInputChange1} 
          style={{ marginRight: '5px' }}
        />
        <input 
          type="number" 
          value={inputValue2} 
          onChange={handleInputChange2} 
          style={{ marginRight: '5px' }}
        />
      </div>
      <div>
        <button onClick={handleAdd} style={{ marginRight: '5px' }}>Sumar</button>
        <button onClick={handleSubtract} style={{ marginRight: '5px' }}>Restar</button>
        <button onClick={handleReset}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Calculadora;
