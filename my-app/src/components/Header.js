import React from 'react';
import { Button, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import ProductivityTracker from './ProductivityTracker.js';
import StudyComponent from './StudyComponent';
import MainComponent from './MainComponent.js';


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

    return(
        <Router>
            <div className="theNav">
                <Nav>
                    <NavItem className="theNavItems">
                        <Link to="/">Organiz.er</Link>  
                        </NavItem>
                    <NavItem className="theNavItems">
                        <Link to="/to-do">To-do's</Link>
                        </NavItem>
                    <NavItem className="theNavItems">
                        <Link to="/studyWithMe">Study With Me</Link>
                    </NavItem>
                    <NavItem className="theNavItems">
                        <Link to="/productivityTracker">Productivity Tracker</Link>        
                    </NavItem>
                    <NavItem className="userInfo">
                        <Button outline color="primary">user info stuff</Button>
                    </NavItem>
                </Nav>
            </div>
            <Route exact={true} path="/" component={ mainComponent }/>
            <Route path="/productivityTracker" component={ productivityTracker }/>
            <Route path="/studyWithMe" component={ studyComponent } />
        </Router>
    );
}

export default Header;