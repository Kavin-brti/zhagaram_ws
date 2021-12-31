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
                            <Menu.Item>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                                2nd menu item
                            </a>
                            </Menu.Item>
                            <Menu.Item>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                                3rd menu item
                            </a>
                            </Menu.Item>
                     </Menu>
    )
    return (
        <nav>
              <div className=" nav nav-wrapper black" >
                  <img src={logo} alt="logo" width={60}/>
                  <div className="navbar">
                      <ul className="right">
                          <li><a className="nav-item" href="/">முகப்பு</a></li>
                          <li> <Dropdown overlay={menu} placement="bottomLeft">
                            <a className="dropdown">நிகழ்வு</a>
                          </Dropdown> </li>
                         
                         
                          <li><a className="nav-item" href="/contact">தொடர்புக்கு </a></li>
                          <li><a className="nav-item" href="/about">பற்றி</a></li>
                          {/* <Button type="primary">Button</Button> */}
                      </ul>
                      </div>
                    


              </div>
              
        </nav>
    );
};

export default Nav;