import { QuerySnapshot } from '@firebase/firestore';
import React , {useState,useEffect} from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import firebase from '../firebase.js'
import '../Stylesheets/style.css'

import pongal from '../Images/pongal-image.jpg'
import { Card, Col, Row,Button } from 'antd';
const { Meta } = Card;
const Dhuruvam=()=> {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("Dhuruvam");
    // //ONE TIME GET FUNCTION
    function getEvents() {
        setLoading(true);
        ref.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
        setEvents(items);
        setLoading(false);
        });
    }

    useEffect(()=>{
        getEvents();
    },[]);


    if(loading){
        <h1>Loading.....</h1>
    }
    return (
        <div>
             <HelmetProvider>
                    <Helmet>
                        <title>ழகரம் | துருவம்</title>
                    </Helmet>
             </HelmetProvider>
            
           <div className="title-pongal">
               <h1>துருவம் </h1>
           </div>
          
          <div className="site-card-wrapper">
               
          <Row gutter={12}>
                        {events.map((event) =>(
                            <div key={event.key}>
                                
                                <Col span={10}>
                                <Card
                                        className="card-item"
                                        style={{ width: 300 }}
                                        cover={
                                        <img
                                            alt="example"
                                            src={event.img}
                                        />
                                }>
                                <Meta
                                    title={event.title}
                                    description={event.description}
                                />   
                                </Card>
                             </Col> 
                            </div>
                        ))}
                  
                  </Row>
            </div>
           
        </div>
    )
}

export default Dhuruvam

