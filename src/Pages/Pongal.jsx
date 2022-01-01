import React from 'react'
import '../Stylesheets/Pongal.css'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import pongal from '../Images/pongal-image.jpg'
import tugOfWar from '../Images/tugOfWar.jpg'
import uriyadi from '../Images/uriyadi.jpg'
import sugarcane from '../Images/sugarcane.jpg'

import { Card,Button } from 'antd';
const { Meta } = Card;
const Pongal=()=> {
    return (
        <div>
             <HelmetProvider>
                    <Helmet>
                        <title>ழகரம் |  பொங்கல்</title>
                    </Helmet>
            </HelmetProvider>
           <div className="title-pongal">
               <h1 style={{color:"#ffffff"}}>பொங்கல்</h1>
           </div>
           <div className="cards">
           <Card
                className="card-item"
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src={pongal}
                />
                }
                >
                <Meta
                title="பொங்கல் வைத்தல் "
                description="This is the description"
                />
            </Card>
<br/>
            <Card
                className="card-item"
                style={{ width: 300 }}
                cover={
                <img
                    style={{width:250, height:175}}
                    alt="example"
                    src={tugOfWar}
                />
                }
                >
                <Meta
                title="கயிறு இழுத்தல் "
                description="This is the description"
                />
            </Card>

            <Card
                className="card-item"
                style={{ width: 300 }}
                cover={
                <img
                    style={{width:250, height:175}}
                    alt="example"
                    src={uriyadi}
                />
                }
                >
                <Meta
                title="உரியடித்தல்"
                description="This is the description"
                />
            </Card>

            <Card
                className="card-item"
                style={{ width: 300 }}
                cover={
                <img
                style={{width:250, height:175}}
                    alt="example"
                    src={sugarcane}
                />
                }
                >
                <Meta
                title="கரும்பு உடைத்தல்"
                description="This is the description"
                />
            </Card>
            </div>


            <Button style={{marginBottom:20}} className="btn" type="danger"><a href="/docs" className="ref"><b>பதிவிற்கு</b></a> </Button>
        </div>
    )
}
export default Pongal

