import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
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
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem className="userInfo">
          <Button outline color="primary">user info stuff</Button>
        </NavItem>
      </Nav>
      <hr/>

      <h1 className="rainbow-text">ORGANIZ.ER</h1>
    </div>
  );
}

export default App;
