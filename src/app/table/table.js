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
                {renderSquare(1, "META", 0)}
                {renderSquare(2, "MONO", 0)}
            </div>
            <div className="btn-group" role="group">
                {renderSquare(3, "MBLAST", 0)}
                {renderSquare(4, "BAND", 0)}
                {renderSquare(5, "EOSIN", 0)}
            </div>
            <div className="btn-group" role="group">
                {renderSquare(6, "PROMYEL", 0)}
                {renderSquare(7, "SEGM", 0)}
                {renderSquare(8, "BASO", 0)}
            </div>
            <div className="btn-group" role="group">
                {renderSquare(9, "MYELO", 0)}
                {renderSquare(10, "LYMPH", 0)}
                {renderSquare(11, "LBLAST", 0)}
            </div>
        </div>
    )
}

export default Table;