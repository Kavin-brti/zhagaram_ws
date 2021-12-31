import React from 'react';
import "../Stylesheets/footer.css"
const Footer = () => {
    return (
        <div>
            <footer>
                <br/>
                <p>&copy;ழகரம் தமிழ் மன்றம் </p>
                <ul className="frontend">
                    <li>கவின்பாரதி  ஆ</li>
                    <li>மைதிலி  இ</li>
                    <li> ஜனனி  ந</li>
                </ul>
                <ul className="backend">
                    <li>கோகுல் </li>
                    <li>சந்திரமுகி</li>
                    <li>அருணா</li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;