import React from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Header.css";
import ProductivityTracker from './ProductivityTracker.js';
import StudyComponent from './StudyComponent';
import MainComponent from './MainComponent.js';
import Todos from './To-dos.js';
import ModalInFunctionalComponent from "./FormComponent";


function Header() {
    const mainComponent = () => {
        return(
            <MainComponent/>
        );
    }

    const productivityTracker = () => {
        return(
            <ProductivityTracker/>
        );
    }

    const studyComponent= () => {
        return(
            <StudyComponent/>
        );
    }

    const todos = () => {
        return(
            <Todos/>
        );
    }

    return(
        <Router>
            <div className="theNav">
                <Nav>
                    <NavItem className="theNavItems">
                        <Link to="/"><Button className="theNavButtons" outline color="danger">Organiz.er</Button></Link>  
                    </NavItem>
                    <NavItem className="theNavItems">
                        <Link to="/to-do"><Button className="theNavButtons" outline color="danger">To-do's</Button></Link>
                    </NavItem>
                    <NavItem className="theNavItems">
                        <Link to="/studyWithMe"><Button className="theNavButtons" outline color="danger">Study With Me</Button></Link>
                    </NavItem>
                    <NavItem className="theNavItems">
                        <Link to="/productivityTracker"><Button className="theNavButtons" outline color="danger">Productivity Tracker</Button></Link>        
                    </NavItem>
                    <NavItem className="userInfo">
                        <ModalInFunctionalComponent/>
                    </NavItem>
                </Nav>
            </div>
            <Route exact={true} path="/" component={ mainComponent }/>
            <Route path="/productivityTracker" component={ productivityTracker }/>
            <Route path="/studyWithMe" component={ studyComponent }/>
            <Route path="/to-do" component={ todos } />
        </Router>
    );
}

export default Header;