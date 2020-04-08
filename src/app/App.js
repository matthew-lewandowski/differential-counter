import React, { useState } from 'react';
import Table from "./table/table";
import './App.css';

function App() {
  const [history, setHistory] = useState([{squares: Array(12).fill(null)}]);
  const [stepNumber, setStepNumber] = useState(0);
  const current = history[stepNumber];

    function handleClick(i) {
      const hist = history.slice(0, stepNumber + 1);
      const current = hist[history.length - 1];
      const squares = current.squares.slice();

      setHistory(history.concat([{squares: squares}]));
      setStepNumber(stepNumber + 1);
  }

  return (
    <div className="App">
      <Table
        squares={current.squares}
        onClick={i => handleClick(i)}
      />
    </div>
  );
}

export default App;
