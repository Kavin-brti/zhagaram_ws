import React from 'react';
import '../Stylesheets/Header.css'
import banner from '../Images/banner.png'
const Header = () => {
    const name = "ழகரம் தமிழ் மன்றம்"
    const clg =  "கொங்கு பொறியியல் கல்லூரி "
    return (
        <div className="header">
            <img className = "bgimg" src={banner} alt="banner"/>
            <div className="head">
                <h1>{clg}</h1>
                <h1>{name}</h1>
            </div>
        </div>
    );
};

export default Header;