import React, {useState} from 'react';
import Modal from "react-modal";
import Table from "./table/table";
import './App.css';
import Header from "./header/header";
import Footer from "./footer/footer";
import Results from "./results/results";
import Options from "./options/options";



Modal.setAppElement('#root');
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        height                : '100%',
        width                 : '100%',
        transform             : 'translate(-50%, -50%)',
        padding               : '0'
    }
};




function App() {
    const [modalIsOpen,setIsOpen] = useState(false);
    const [optionsOpen, setOptions] = useState(false);
    const [history, setHistory] = useState([{squares: Array(12).fill(0)}]);
    const [total, setTotal] = useState(100);
    const [stepNumber, setStepNumber] = useState(0);
    const current = history[stepNumber];
    const count = stepNumber - current.squares[0];
    const idsNotToAdd = [0];

    function footerClick(id) {
        if (id === 1){
            undo();
        } else if (id === 2){
            if (count < 1){
                alert("Nothing selected")
            } else {
                openModal()
            }
        } else {
            openOptions()
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

        if (count < total){
            squares[i] = squares[i] + 1;
        } else if (count <= total && idsNotToAdd.includes(i)){
            squares[i] = squares[i] + 1;
        } else {
            alert(`${total} Counted!`);
            return
        }
        setHistory(history.concat([{squares: squares}]));
        setStepNumber(stepNumber + 1);
    }
    function closeModal(){
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    function closeOptions(){
        setOptions(false)
    }
    function openOptions() {
        setOptions(true)
    }
    function saveOptions(threshold) {
        setTotal(threshold);
        closeOptions();
    }

    return (
        <div className="App">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <Results
                    onClick={closeModal}
                    squares={current.squares}
                    count={count}
                />
            </Modal>
            <Modal
                isOpen={optionsOpen}
                onRequestClose={closeOptions}
                style={customStyles}
            >
                <Options
                    total={total}
                    saveSettings={threshold => saveOptions(threshold)}
                />
            </Modal>
            <Header
                count={count}
                total={total}
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
