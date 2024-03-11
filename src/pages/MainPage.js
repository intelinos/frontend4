import '../App.css';
import Header from '../templates/Header';
import ResultsTable from "../templates/ResultsTable";
import TopDiv from "../templates/TopDiv";
import ClearButton from '../templates/ClearButton';
import LogoutButton from "../templates/LogoutButton";
import ErrorModal from "../templates/ErrorModal";
import React from "react";

function MainPage() {
    return (

        <div id="container" className="margin">
            <Header/>
            <TopDiv/>

            <div id="results-div">
                <ResultsTable/>
            </div>

            <div id="subbuttons">
                <ClearButton/>
                <LogoutButton/>
            </div>

            <ErrorModal/>
        </div>
    );

}

export default MainPage;