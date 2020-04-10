import React, {useState} from 'react';
import Table from "./table/table";
import './App.css';
import Header from "./header/header";
import Footer from "./footer/footer";

function App() {
    const [history, setHistory] = useState([{squares: Array(12).fill(0)}]);
    const [stepNumber, setStepNumber] = useState(0);
    const current = history[stepNumber];
    const count = stepNumber - current.squares[0];
    const idsNotToAdd = [0];
    const TOTAL = 100;


    function footerClick(id) {
        if (id === 1){
            undo();
        } else if (id === 2){

        } else {

        }
    }
    function undo() {
        if (stepNumber >= 1){
            setStepNumber(stepNumber - 1);
            setHistory(history.slice(0, stepNumber));
        }
    }

    function handleClick(i) {
        const hist = history.slice(0, stepNumber + 1);
        const current = hist[history.length - 1];
        const squares = current.squares.slice();

        if (count < TOTAL){
            squares[i] = squares[i] + 1;
        } else if (count <= TOTAL && idsNotToAdd.includes(i)){
            squares[i] = squares[i] + 1;
        } else {
            alert(`${TOTAL} Counted!`);
            return
        }
        setHistory(history.concat([{squares: squares}]));
        setStepNumber(stepNumber + 1);
    }

    return (
        <div className="App">
            <Header
                count={count}
                total={TOTAL}
            />
            <Footer
                onClick={id => footerClick(id)}
            />
            <Table
                squares={current.squares}
                onClick={i => handleClick(i)}
            />
        </div>
    );
}

export default App;
