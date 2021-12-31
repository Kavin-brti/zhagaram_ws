import React from 'react';
import logo from '../Images/tmlogo.png'
import { Navbar } from 'react-bootstrap';

import '../Stylesheets/nav.css'
const Nav = () => {
    return (
        <nav>
              <div className="nav-wrapper black" >
                  <img src={logo} alt="logo" width={60}/>
                      <ul className="right">
                          <li><a href="">முகப்பு</a></li>
                          <li><a href="">நிகழ்வு</a></li>
                          <li><a href="">தொடர்பு</a></li>
                          <li><a href="">பற்றி</a></li>
                      </ul>
              </div>
        </nav>
    );
};

export default Nav;