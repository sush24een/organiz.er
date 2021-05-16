import React from 'react';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

function Header() {
    return(
        <div>
            <Nav className="theNav">
                <NavItem className="theNavItems">
                <NavLink href="/">Organiz.er</NavLink>
                </NavItem>
                <NavItem className="theNavItems">
                <NavLink href="/to-do">To-do's</NavLink>
                </NavItem>
                <NavItem className="theNavItems">
                <NavLink href="/studyWithMe">Study With Me</NavLink>
                </NavItem>
                <NavItem className="theNavItems">
                <NavLink href="/productivityTracker">Productivity Tracker</NavLink>
                </NavItem>
                <NavItem className="userInfo">
                <Button outline color="primary">user info stuff</Button>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Header;