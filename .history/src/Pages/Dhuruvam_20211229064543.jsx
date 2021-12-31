import React from 'react'
import { Helmet } from 'react-helmet';
import firebase from '../firebase'
const Dhuruvam=()=> {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const ref = firebase.firestore().collection("dhuruvam");

    //ONE TIME GET FUNCTION
    function getEvents() {
        setLoading(true);
        ref.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setEvents(items);
        setLoading(false);
        });
    return (
        <div>
            <Helmet>
                <title>ழகரம் | துருவம்</title>
            </Helmet>
           <div className="title-pongal">
               <h1>துருவம் </h1>
           </div>


        </div>
    )
}
}

export default Dhuruvam

