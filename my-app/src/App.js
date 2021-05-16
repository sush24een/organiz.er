import React from "react";
//import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MainComponent from "./components/MainComponent.js";
import Header from "./components/Header.js";

function App() {
    return (
        <div className="App">
            <Header/>
            <hr/>
            <h1 className="rainbow-text">ORGANIZ.ER</h1>
            <MainComponent/>
        </div>
    );
}

export default App;
