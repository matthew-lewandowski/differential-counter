import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import "./results.css";

function Results(props) {
    const squares = props.squares;
    const count = props.count;
    return (
        <div className="results">
            <div className="results-header">
                <button className="back-button" onClick={props.onClick}><FontAwesomeIcon icon={faArrowLeft}/></button>
                <h5 className="results-title">Differential Count</h5>
            </div>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Cell Type</th>
                    <th scope="col">Count</th>
                    <th scope="col">% of total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>NRBC</td>
                    <td>{squares[0]}</td>
                    <td>0%</td>
                </tr>
                <tr>
                    <td>META</td>
                    <td>{squares[1]}</td>
                    <td>{((squares[1]/count)*100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>MONO</td>
                    <td>{squares[2]}</td>
                    <td>{((squares[2]/count)*100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>MBLAST</td>
                    <td>{squares[3]}</td>
                    <td>{((squares[3]/count)*100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>BAND</td>
                    <td>{squares[4]}</td>
                    <td>{((squares[4]/count)*100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>EOSIN</td>
                    <td>{squares[5]}</td>
                    <td>{((squares[5]/count)*100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>PROMYEL</td>
                    <td>{squares[6]}</td>
                    <td>{((squares[6]/count)*100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>SEGM</td>
                    <td>{squares[7]}</td>
                    <td>{((squares[7]/count)*100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>BASO</td>
                    <td>{squares[8]}</td>
                    <td>{((squares[8]/count)*100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>MYELO</td>
                    <td>{squares[9]}</td>
                    <td>{((squares[9]/count)*100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>LYMPH</td>
                    <td>{squares[10]}</td>
                    <td>{((squares[10]/count)*100).toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>LBLAST</td>
                    <td>{squares[11]}</td>
                    <td>{((squares[11]/count)*100).toFixed(2)}%</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Results;