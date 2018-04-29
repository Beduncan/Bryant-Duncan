import React from 'react';
import {Link} from 'react-router-dom';

// importing style
import "./Nav.css";


      // <img src={require('./../../images/')} className="brand-logo center img-responsive" alt="Logo" />
const Nav = () => (
  <nav>
    <div className="nav-wrapper">
    <p className="brand-logo center logo">Bryantduncan98@gmail.com</p>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
		    <li className={window.location.pathname === "/about" ? "active" : ""}>
		      <Link className="Link" to="/about">About Me</Link>
		    </li>
		    <li className={window.location.pathname === "/portfoilo" ? "active" : ""}>
		      <Link className="Link" to="/portfoilo">Portfoilo</Link>
		    </li>
		    <li className={window.location.pathname === "/contact" ? "active" : ""}>
		      <Link className="Link" to="/contact">Contact</Link>
		    </li>
      </ul>
    </div>
  </nav>	
	);

export default Nav;