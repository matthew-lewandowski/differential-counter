import React from "react";
import Square from "./square";

function Table(props) {
    function renderSquare(id, name, count) {
        return (
            <Square
                id={id}
                name={name}
                value={props.squares[id]}
                onClick={() => props.onClick(id)}
            />
        );
    }

    return (
        <div className="btn-group-vertical">
            <div className="btn-group" role="group">
                {renderSquare(0, "NRBC", 0)}
                {renderSquare(1, "MONO", 0)}
                {renderSquare(2, "SEGM", 0)}
            </div>
            <div className="btn-group" role="group">
                {renderSquare(3, "META", 0)}
                {renderSquare(4, "LYM", 0)}
                {renderSquare(5, "META", 0)}
            </div>
            <div className="btn-group" role="group">
                {renderSquare(6, "LBLAST", 0)}
                {renderSquare(7, "EOS", 0)}
                {renderSquare(8, "BAND", 0)}
            </div>
            <div className="btn-group" role="group">
                {renderSquare(9, "PROMYEL", 0)}
                {renderSquare(10, "BAS", 0)}
                {renderSquare(11, "MYEL", 0)}
            </div>
        </div>
    )
}

export default Table;