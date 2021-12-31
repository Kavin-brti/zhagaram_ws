import React from 'react';
import "../Stylesheets/footer.css"
import {InstagramOutlined,FacebookFilled} from '@ant-design/icons'
const Footer = () => {
    return (
        <div>
            <footer>
                <br/>
                <p>&copy;ழகரம் தமிழ் மன்றம் </p>
                <InstagramOutlined style={{fontSize:30}} /><FacebookFilled style={{fontSize:30}}  /><MailTwoTone style={{fontSize:30} />
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