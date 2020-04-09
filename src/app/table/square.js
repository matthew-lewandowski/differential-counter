import React from "react";
import './table.css';

function Square(props) {
    return (
        <button type="button" className="btn btn-primary btn-diff" onClick={props.onClick}>
            <h5>{props.name}</h5>
            <h5>{props.value}</h5>
        </button>
    )
}

export default Square;