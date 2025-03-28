import React, { useState } from 'react';
import Comp from './Comp';

const App = () => {
  const [nick, setNick] = useState('');
  const [option, setOption] = useState('Red');
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nick && option && number) {
      const isEven = parseInt(number) % 2 === 0 ? 'parzysta' : 'nieparzysta';
      setResult(`${nick}, ${option}, ${isEven}`);
      setNick('');
      setOption('Red');
      setNumber('');
    }
  };

  return (
    <div>
      <h2>Formularz</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nick"
          value={nick}
          onChange={(e) => setNick(e.target.value)}
        />
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
        </select>
        <input
          type="number"
          placeholder="Liczba"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Zatwierdź</button>
      </form>

      {result && <p>{result}</p>}

      <hr />
      <Comp num={2}>Mój ulubiony kolor to:</Comp>
      <Comp num={1}>Trawa jest koloru:</Comp>
    </div>
  );
};

export default App;
