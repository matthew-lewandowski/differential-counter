import React from "react";
import './table.css';

function Square(props) {
    return (
        <button type="button" className="btn btn-primary btn-diff" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square;