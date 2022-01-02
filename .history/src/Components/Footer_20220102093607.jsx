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
                    <li>கவின்பாரதி  ஆ, மைதிலி  இ</li><br/>
                    <li> தர்ஷினி த சா , ஜனனி  ந</li><br/>
                </ul>
                <ul className="backend">
                    <li> சந்திரமுகி அ , அருணா சு  </li><br/>
                    <li>கோகுலக்கண்ணன் அ , ஆனந்தினி மு </li><br/>
                    {/*   */}
                </ul>
            </footer>
        </div>
    );
};

export default Footer;