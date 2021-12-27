import React from 'react';
import '../Stylesheets/Carousel.css'
import image1 from '../Images/banner.png';
import image2 from '../Images/banner.png';
import image3 from '../Images/banner.png';
import image4 from '../Images/banner.png';
import image5 from '../Images/banner.png';

const CarouselContainer = () => {
    return (
        <div>
            <div className="img-grp">
                <a  href="#one!"><img  className="img" src={image1}/></a>
                <a  href="#two!"><img className="img" src={image2}/></a>
                <a  href="#three!"><img className="img" src={image3}/></a>
                <a  href="#four!"><img className="img" src={image4}/></a>
                <a  href="#five!"><img className="img" src={image5}/></a>
            </div>

        </div>
    )
}

export default CarouselContainer;