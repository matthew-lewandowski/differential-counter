import React from "react";

function Counter(props) {
    return (
        <div className="counter">
            {props.count} of {props.total}
        </div>
    )
}

export default Counter;