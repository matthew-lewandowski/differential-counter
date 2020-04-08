import React, { useState } from 'react';
import Table from "./table/table";
import './App.css';
import Header from "./header/header";

function App() {
  const [history, setHistory] = useState([{squares: Array(12).fill(0)}]);
  const [stepNumber, setStepNumber] = useState(0);
  const [count, setCount] = useState(0);
  const current = history[stepNumber];
  const idsNotToAdd = [0];

    function handleClick(i) {
      const hist = history.slice(0, stepNumber + 1);
      const current = hist[history.length - 1];
      const squares = current.squares.slice();
      if (count < 100) {
        idsNotToAdd.includes(i)?
            setCount(count) :
            setCount(count + 1);
        squares[i] = squares[i] + 1;
      } else if (count < 100 && !idsNotToAdd.includes(i)) {
        squares[i] = squares[i] + 1;
      }
      else {
        alert("100 Counted")
      }
      setHistory(history.concat([{squares: squares}]));
      setStepNumber(stepNumber + 1);

  }

  return (
    <div className="App">
      <Header
        count={count}
      />
      <Table
        squares={current.squares}
        onClick={i => handleClick(i)}
      />
    </div>
  );
}

export default App;
