import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
function Vidhai() {
    return (
        <div>
            <HelmetProvider>
                    <Helmet>
                        <title>ழகரம் |   பற்றி</title>
                    </Helmet>
            </HelmetProvider>
            <h1 className="title">விதை </h1>
        </div>
    )
}

export default Vidhai
