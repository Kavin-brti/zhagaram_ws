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
                    <span>மூல உருவாக்கம் </span><br/>
                    <li>கவின்பாரதி  ஆ , மைதிலி  இ</li><br/>
                    <span>இணையதள வடிவமைப்பு </span><br/>
                    <li> தர்ஷினி த சா , ஜனனி  ந</li><br/>
                </ul>
                <ul className="backend">
                    <span>சுவரொட்டி / புகைப்பட வடிவமைப்பு </span><br/>
                    <li> சந்திரமுகி அ , அருணா சு  </li><br/>
                    <span>இணையம் பராமரிப்பு  </span><br/>
                    <li>கோகுலக்கண்ணன் அ , ஆனந்தினி மு </li><br/>
                    {/*   */}
                </ul>
            </footer>
        </div>
    );
};

export default Footer;