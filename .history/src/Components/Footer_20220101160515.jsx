import React from 'react';
import "../Stylesheets/footer.css"
import {InstagramOutlined,FacebookFilled,MailFilled} from '@ant-design/icons'
const Footer = () => {
    return (
        <div>
            <footer>
                <br/>
                <p>&copy;ழகரம் தமிழ் மன்றம் </p>
                <center><InstagramOutlined style={{fontSize:30}} />&nbsp;&nbsp;&nbsp;<FacebookFilled style={{fontSize:30}}  />&nbsp;&nbsp;&nbsp;<MailFilled style={{fontSize:30} }/></center>
                <ul className="frontend">
                    <li>கவின்பாரதி  ஆ</li><br/>
                    <li>மைதிலி  இ</li><br/>
                    <li> ஜனனி  ந</li><br/>
                </ul>
                <ul className="backend">
                    <li>கோகுல் </li><br/>
                    <li>சந்திரமுகி</li><br/>
                    <li>அருணா</li><br/>
                    {/* கோகுலக்கண்ணன் அ 
                        சந்திரமுகி அ
                        தர்ஷினி த சா
                        அருணா சு 
                        ஆனந்தினி மு   */}
                </ul>
            </footer>
        </div>
    );
};

export default Footer;