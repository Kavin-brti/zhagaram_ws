import React , {useState,useEffect} from 'react'
import { Helmet } from 'react-helmet';
import firebase from '../firebase.js'

const Dhuruvam=()=> {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("Dhuruvam");
    console.log(ref);
    // //ONE TIME GET FUNCTION
    function getEvents() {
        setLoading(true);
        ref.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setEvents(items);
        setLoading(false);
        });
    }

    useEffect(()=>{
        getEvents();
    },[])
    return (
        <div>
            <Helmet>
                <title>ழகரம் | துருவம்</title>
            </Helmet>
           <div className="title-pongal">
               <h1>துருவம் </h1>
           </div>
           <div>
               {events.map((event) =>{
                   <div className="key" key={event.key}>
                       <h2>{event.title}</h2>
                       <p>{event.description}</p>
                   </div>
               })}
           </div>


        </div>
    )
}

export default Dhuruvam

