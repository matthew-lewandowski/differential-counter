import React from "react";
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt, faFileAlt, faFireAlt } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {
    return (
        <div className="footer">
            <div className="spacer"/>
            <button className="btn footer-button"><FontAwesomeIcon icon={faUndoAlt} onClick={() => props.onClick(1)} /></button>
            <button className="btn footer-button"><FontAwesomeIcon icon={faFileAlt} onClick={() => props.onClick(2)} /></button>
            <button className="btn footer-button"><FontAwesomeIcon icon={faFireAlt} onClick={() => props.onClick(3)} /></button>
        </div>
    )
}

export default Footer;