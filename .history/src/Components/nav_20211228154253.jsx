import React from 'react';
import logo from '../Images/tmlogo.png'
import {Button } from 'antd'
import '../Stylesheets/nav.css'
const Nav = () => {
    return (
        <nav>
              <div className="nav-wrapper black" >
                  <img src={logo} alt="logo" width={60}/>
                      <ul className="right">
                          <li><a className="nav-item" href="/">முகப்பு</a></li>
                          <li> <a className='nav-item dropdown-trigger ' data-target='dropdown1'>நிகழ்வு</a></li>
                           
                          <li><a className="nav-item" href="/contact">தொடர்புக்கு </a></li>
                          <li><a className="nav-item" href="/about">பற்றி</a></li>
                          <Button type="primary">Button</Button>
                      </ul>
                    


              </div>
              
        </nav>
    );
};

export default Nav;