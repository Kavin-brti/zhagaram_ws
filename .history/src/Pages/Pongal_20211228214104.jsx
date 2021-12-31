import React from 'react'
import '../Stylesheets/Pongal.css'
import pongal from '../Images/pongal-image.jpg'
import tugOfWar from '../Images/tugOfWar.jpg'
import uriyadi from '../Images/uriyadi'
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
            </div>
        </div>
    )
}
export default Pongal

