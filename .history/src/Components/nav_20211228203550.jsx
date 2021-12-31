import React from 'react';
import logo from '../Images/tmlogo.png'

import { Menu, Dropdown, Space } from 'antd';
import {HomeOutlined, LoginOutlined,ContactsOutlined,MessageOutlined} from '@ant-design/icons';

import '../Stylesheets/nav.css'
const Nav = () => {
    const menu=(
                    <Menu>
                            <Menu.Item>
                                <a  href="/pongal">
                                பொங்கல் 
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/dhuruvam">
                                துருவம் 
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a  href="/yaazh">
                                யாழ் 
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a   href="/vidhai">
                                விதை
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
                          <li><a className="nav-item" href="/"><HomeOutlined style={{color:"white" , fontSize:"20px"}} />&nbsp; முகப்பு</a></li>
                          <li> <Dropdown overlay={menu} placement="bottomLeft">
                            <a className="nav-item"><LoginOutlined style={{color:"white" , fontSize:"20px"}} />&nbsp;நிகழ்வு</a>
                          </Dropdown> </li>
                         
                         
                          <li><a className="nav-item" href="/contact"><ContactsOutlined style={{color:"white" , fontSize:"20px"}} />&nbsp;தொடர்புக்கு </a></li>
                          <li><a className="nav-item" href="/about"><MessageOutlined style={{color:"white" , fontSize:"20px"}} />&nbsp;பற்றி</a></li>
                          {/* <Button type="primary">Button</Button> */}
                      </ul>
                      </div>
                    


              </div>
              
        </nav>
    );
};

export default Nav;