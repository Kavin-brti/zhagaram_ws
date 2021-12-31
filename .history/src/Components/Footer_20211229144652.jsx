import React from 'react';
import "../Stylesheets/footer.css"
import {InstagramOutlined} from '@ant-designs/icons'
const Footer = () => {
    return (
        <div>
            <footer>
                <br/>
                <p>&copy;ழகரம் தமிழ் மன்றம் </p>
                <InstagramOutlined />
                <ul className="frontend">
                    <li>கவின்பாரதி  ஆ</li><br/>
                    <li>மைதிலி  இ</li><br/>
                    <li> ஜனனி  ந</li><br/>
                </ul>
                <ul className="backend">
                    <li>கோகுல் </li><br/>
                    <li>சந்திரமுகி</li><br/>
                    <li>அருணா</li><br/>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;