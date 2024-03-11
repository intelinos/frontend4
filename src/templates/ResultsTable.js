import React from 'react';
import '../App.css';
import Data from '../utils/Data';

export default class ResultsTable extends React.Component {

    render() {
        return (
            <div id="table_div" className="blured-container margin">
                <table id="result-table">
                    <thead>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Result</th>
                    </tr>
                    </thead>

                    <tbody id="result-body">
                        <Data/>
                    </tbody>
                </table>
            </div>
        );
    }
}