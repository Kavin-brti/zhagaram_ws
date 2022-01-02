import React , {useState,useEffect} from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import firebase from '../firebase.js'



import { Card, Col, Row,Button,Spin,Alert } from 'antd';
const { Meta } = Card;
const Dhuruvam=()=> {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

  
  

    useEffect(()=>{
          // //ONE TIME GET FUNCTION
    const ref = firebase.firestore().collection("Dhuruvam");
    setLoading(true);
    function getEvents() {
        ref.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
        setLoading(false);
        setEvents(items);
        });
    }
  
        getEvents();
    },[]);

console.log(loading)
    if(loading){
        <h1>Loading</h1>
   
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
          <Spin tip="Loading..." style={{width:1550}} size="large" spinning={loading}>
          <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
                />
          </Spin>
          <Row gutter={0}>
                        {events.map((event) =>(
                            <div key={event.key}>
                                
                                <Col span={1}>
                                <Card
                                        className="card-item"
                                        style={{ width: 350 , height:300 , marginLeft:120}}
                                        cover={
                                        <img
                                            alt="example"
                                            src={event.img}
                                            height={200}
                                           
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
            <Button style={{marginBottom:20}} className="btn" type="danger"><a href="/docs" className="ref"><b>பதிவிற்கு</b></a> </Button>

        </div>
    )
}

export default Dhuruvam
