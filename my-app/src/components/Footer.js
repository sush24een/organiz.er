import React from "react";
import "./Footer.css";
import {BrowserRouter as Router, Link } from 'react-router-dom';


const Footer = () => (
<div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2 style={{ textShadow: '1px 1px 2px black' }}>Organiz.er</h2>
            <h5 className="list-unstyled">
              <li>Vipz and Sush</li>
              <li>Bangalore, India</li>
              <li>Just two nerds</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Links</h4>
            <ui className="list-unstyled">
            <Router>
              <li><Link to="/to-do">To-do's</Link></li>
              <li><Link to="/studyWithMe">Study With Me</Link></li>
              <li><Link to="/productivityTracker">Productivity Tracker</Link></li>

            </Router>
              
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Boring Stuff</h4>
            <ui className="list-unstyled">
              <li>Legal</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ORGANIZ.ER | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
);

export default Footer;