import React from "react";
import Square from "./square";

function Table(props) {
    function renderSquare(id) {
        return (
            <Square
                value={id}
                onClick={() => props.onClick(id)}
            />
        );
    }

    return (
        <div className="btn-group-vertical">
            <div className="btn-group" role="group">
                {renderSquare("MYEL")}
                {renderSquare("MONO")}
                {renderSquare("PROMYEL")}
            </div>
            <div className="btn-group" role="group">
                {renderSquare("META")}
                {renderSquare("LYM")}
                {renderSquare("MBLAST")}
            </div>
            <div className="btn-group" role="group">
                {renderSquare("BAND")}
                {renderSquare("EOS")}
                {renderSquare("LBLAST")}
            </div>
            <div className="btn-group" role="group">
                {renderSquare("SEGM")}
                {renderSquare("BAS")}
                {renderSquare("NRBC")}
            </div>
        </div>
    )
}

export default Table;