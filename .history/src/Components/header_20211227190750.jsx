import React from 'react';
import '../Stylesheets/Header.css'
import banner from '../Images/banner.png'
const Header = () => {
    const name = "ழகரம் தமிழ் மன்றம்"
    const clg =  "கொங்கு பொறியியல் கல்லூரி "
    return (
        <div className="header">
            <img className = "bgimg" src={banner} at="banner/>
            <div className="title">
                <h3>{clg}</h3>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Header;