import React from "react";
import Counter from "./counter";
import "./header.css"

function Header(props) {
    return (
        <div className="header">
            <div>
                <h1>WBC Counter</h1>
            </div>
            <Counter
                count={props.count}
                total={props.total}
            />
        </div>
    )
}

export default Header;