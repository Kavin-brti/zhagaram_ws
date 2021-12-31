import React from 'react'
import '../Stylesheets/Pongal.css'
import { Card } from 'antd';

const { Meta } = Card;
const Pongal=()=> {
    return (
        <div> 
           <div className="title-pongal">
               <h1 style={{color:"#ffffff"}}>பொங்கல்</h1>
           </div>
           <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                >
                <Meta
                title="Card title"
                description="This is the description"
                />
            </Card>

        </div>
    )
}
export default Pongal

