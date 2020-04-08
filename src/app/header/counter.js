import React from "react";

function Counter(props) {
    return (
        <div className="counter">
            {props.count} of 100
        </div>
    )
}

export default Counter;