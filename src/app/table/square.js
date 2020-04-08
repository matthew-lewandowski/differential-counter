import React from "react";
import './table.css';

function Square(props) {
    return (
        <button type="button" className="btn btn-primary btn-diff" onClick={props.onClick}>
            <h3>{props.name}</h3>
            <h5>{props.value}</h5>
        </button>
    )
}

export default Square;