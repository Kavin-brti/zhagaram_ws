import React, {useState} from 'react';
import '../Stylesheets/Header.css'
import banner from '../Images/banner.png'

// import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai';
// import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';
import {AiOutlineDoubleRight,AiOutlineDoubleLeft} from 'react-icons/ai';
import image1 from '../Images/IMG_1994.JPG';
import image2 from '../Images/IMG_1996.JPG';
import image3 from '../Images/IMG_2004.JPG';
import image4 from '../Images/IMG_2005.JPG';
import image5 from '../Images/IMG_2075.JPG';
import image6 from '../Images/IMG_2076.JPG';
import image7 from '../Images/IMG_2077.JPG';
const Header = () => {

    const [current, setCurrent] = useState(0)
    const slides=[{image1},{image2},{image3},{image4},{image5},{image6},{image7}];
    const length=slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
    
      if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }
    const name = "ழகரம் தமிழ் மன்றம்"
    const clg =  "கொங்கு பொறியியல் கல்லூரி "


    return (
        <div className="header">
            <img className = "bgimg" alt="banner" src={banner}/>
            <div  className="title">
                <h3 style={{color:"white"}}>{clg}</h3>
                <h4 style={{color:"white"}}>{name}</h4>
            </div>

        <section style={{backgroundColor:"#fff"}} className="slider img-grp">
        {/* <AiOutlineArrowLeft className='left-arrow' onClick={prevSlide} />
        <AiOutlineArrowRight className='right-arrow' onClick={nextSlide} /> */}
        <AiOutlineDoubleLeft className='left-arrow' onClick={prevSlide} />
        <AiOutlineDoubleRight className='right-arrow' onClick={nextSlide} />
        {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}


            {/* <div className="img-grp">
                <a  href="#one!"><img  className="img" src={image1}/></a>
                <a  href="#two!"><img className="img" src={image2}/></a>
                <a  href="#three!"><img className="img" src={image3}/></a>
                <a  href="#four!"><img className="img" src={image4}/></a>
                <a  href="#five!"><img className="img" src={image5}/></a>
            </div> */}
            
            {slides.map((slide,index)=> {
                return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}  >
            
            {index === current && (
              <img src={slide.image1||slide.image2||slide.image3||slide.image4||slide.image5||slide.image6||slide.image7} width="700" alt='events' className='image' />
            )}
          </div>
        );
      })}
    </section>

        </div>


      
    );
};


export default Header;

