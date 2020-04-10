import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import "./options.css"

function Options(props) {
    const [alertThreshold, setThreshold] = useState((props.total).toString());

    function handleOptionChange(changeEvent) {
        setThreshold(changeEvent.target.value)
    }
    return (
        <div className="options">
            <div className="options-header">
                <button className="back-button" onClick={() => props.saveSettings(alertThreshold)}><FontAwesomeIcon icon={faArrowLeft}/></button>
                <h5 className="options-title">Options</h5>
            </div>
            <div className="alert-threshold">
                <div className="container">
                    <h5 className="threshold-title">Alert Threshold</h5>
                    <div className="row">
                        <div className="col-sm-12">
                            <form>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="50" checked={alertThreshold==="50"} onChange={handleOptionChange}/>
                                        50
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="100" checked={alertThreshold==="100"} onChange={handleOptionChange}/>
                                        100
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="200" checked={alertThreshold==="200"} onChange={handleOptionChange}/>
                                        200
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="300" checked={alertThreshold==="300"} onChange={handleOptionChange}/>
                                        300
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="400" checked={alertThreshold==="400"} onChange={handleOptionChange}/>
                                        400
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="save">
                <button type="button" className="btn btn-success save-button" onClick={() => props.saveSettings(alertThreshold)}>Save</button>
            </div>

        </div>
)
}
export default Options;