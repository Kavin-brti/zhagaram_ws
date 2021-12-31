import React from 'react';
import logo from '../Images/tmlogo.png'
import { Menu, Dropdown, Button, Space } from 'antd';

import '../Stylesheets/nav.css'
const Nav = () => {
    const menu=(
        <Menu>
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
        </a>
        </Menu.Item>
      </Menu>
    )
    return (
        <nav>
              <div className="nav-wrapper black" >
                  <img src={logo} alt="logo" width={60}/>
                      <ul className="right">
                          <li><a className="nav-item" href="/">முகப்பு</a></li>
                          <li> <a className='nav-item dropdown-trigger ' data-target='dropdown1'>நிகழ்வு</a></li>
                          <Dropdown overlay={menu} placement="bottomLeft">
                            <Button>bottomLeft</Button>
                          </Dropdown>
                         
                          <li><a className="nav-item" href="/contact">தொடர்புக்கு </a></li>
                          <li><a className="nav-item" href="/about">பற்றி</a></li>
                          {/* <Button type="primary">Button</Button> */}
                      </ul>
                    


              </div>
              
        </nav>
    );
};

export default Nav;