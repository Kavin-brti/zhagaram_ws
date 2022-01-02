import React from 'react';
import "../Stylesheets/footer.css"
import {InstagramOutlined,FacebookFilled,MailFilled} from '@ant-design/icons'
const Footer = () => {
    return (
        <div>
            <footer>
                <br/>
                <p>&copy;ழகரம் தமிழ் மன்றம் </p>
                <center>
                  <a  href="https://instagram.com/kec_zhagaram_tamilmandram?utm_medium=copy_link"><InstagramOutlined style={{fontSize:30}} /></a>  &nbsp;&nbsp;&nbsp;
                  <a href="https://www.facebook.com/KEC-Tamil-Mandram-529829280479290/"><FacebookFilled style={{fontSize:30}}  /></a>&nbsp;&nbsp;&nbsp;
                  <a href="mailto:tamilmandramkec@gmail.com"><MailFilled style={{fontSize:30} }/></a>
                </center>
                <ul className="frontend">
                    <span>உருவாக்கம் </span><br/>
                    <li> <b>கவின்பாரதி  ஆ , மைதிலி  இ</b></li><br/>
                    <span>இணையதள வடிவமைப்பு </span><br/>
                    <li><b> தர்ஷினி த சா , ஜனனி  ந</b></li><br/>
                </ul>
                <ul className="backend">
                    <span>சுவரொட்டி / புகைப்பட வடிவமைப்பு </span><br/>
                    <li> <b>சந்திரமுகி அ , அருணா சு </b> </li><br/>
                    <span>இணையம் பராமரிப்பு  </span><br/>
                    <li><b>கோகுலகண்ணன் அ , ஆனந்தினி மு </b></li><br/>
                    {/*   */}
                </ul>
            </footer>
        </div>
    );
};

export default Footer;