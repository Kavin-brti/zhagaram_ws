import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
export default function About() {
    return (
        <div>
            <HelmetProvider>
                    <Helmet>
                        <title>ழகரம் |   பற்றி</title>
                    </Helmet>
            </HelmetProvider>
            பற்றி
        </div>
    )
}
