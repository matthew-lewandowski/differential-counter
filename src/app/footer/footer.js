import React from "react";
import "./footer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUndoAlt, faFileAlt, faCog} from '@fortawesome/free-solid-svg-icons'

function Footer(props) {
    return (
        <div className="footer">
            <div className="spacer"/>
            <button className="btn footer-button" onClick={() => props.onClick(1)}><FontAwesomeIcon icon={faUndoAlt}/>
            </button>
            <button className="btn footer-button" onClick={() => props.onClick(2)}><FontAwesomeIcon icon={faFileAlt}/>
            </button>
            <button className="btn footer-button" onClick={() => props.onClick(3)}><FontAwesomeIcon icon={faCog}/>
            </button>
        </div>
    )
}

export default Footer;