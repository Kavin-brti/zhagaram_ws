import React from 'react';
import logo from '../Images/tmlogo.png'
import '../Stylesheets/nav.css'
const Nav = () => {
    return (
        <nav>
              <div className="nav-wrapper black" >
                  <img src={logo} alt="logo" width={60}/>
                      <ul className="right">
                          <li><a className="nav-item" href="/">முகப்பு</a></li>
                          <li> <a className='nav-item dropdown-trigger ' data-target='dropdown1'>நிகழ்வு</a></li>
                            <ul id='dropdown1' className='dropdown-content'>
                                <li><a href="#!">one</a></li>
                                <li><a href="#!">two</a></li>
                                <li class="divider" tabindex="-1"></li>
                                <li><a href="#!">three</a></li>
                                <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                                <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                            </ul>
                          <li><a className="nav-item" href="/contact">தொடர்புக்கு </a></li>
                          <li><a className="nav-item" href="/about">பற்றி</a></li>
                      </ul>
                    


              </div>
              
        </nav>
    );
};
document.addEventListener('DOMContentLoaded', function() {
    var options = {};
   
  });
export default Nav;