import React from "react";
import Counter from "./counter";

function Header(props) {
    return (
        <div>
            <div>
                <h1>WBC Counter</h1>
            </div>
            <Counter
                count={props.count}
            />
        </div>
    )
}

export default Header;