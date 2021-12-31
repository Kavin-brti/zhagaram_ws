import React from 'react'
import { Helmet ,HelmetProvider} from 'react-helmet-async';
export default function Contact() {
    return (
        <div>
             <HelmetProvider>
                    <Helmet>
                        <title>ழகரம் |  தொடர்புக்கு</title>
                    </Helmet>
            </HelmetProvider>
            <h1>தொடர்புக்கு</h1>
        </div>
    )
}
