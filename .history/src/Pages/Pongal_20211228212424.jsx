import React from 'react'
import '../Stylesheets/Pongal.css'
import pongal from '../Images/pongal-image.jpg'
import { Card } from 'antd';
const { Meta } = Card;
const Pongal=()=> {
    return (
        <div> 
           <div className="title-pongal">
               <h1 style={{color:"#ffffff"}}>பொங்கல்</h1>
           </div>
           <div className="cards">
           <Card
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
            </div>
        </div>
    )
}
export default Pongal

