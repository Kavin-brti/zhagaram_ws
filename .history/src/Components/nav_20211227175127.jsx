import React from 'react';
import logo from '../Images/tmlogo.png'
import '../Stylesheets/nav.css'
const Nav = () => {
    return (
        <nav>
              <div className="nav-wrapper black" >
                  <img src={logo} alt="logo" width={60}/>
                      <ul className="right">
                          <li className="nav-item"><a className="nav-item" href="">முகப்பு</a></li>
                          <li className="nav-item"><a className="nav-item" href="">நிகழ்வு</a></li>
                          <li className="nav-item"><a className="nav-item" href="">தொடர்பு</a></li>
                          <li className="nav-item"><a className="nav-item" href="">பற்றி</a></li>
                      </ul>
              </div>
        </nav>
    );
};

export default Nav;