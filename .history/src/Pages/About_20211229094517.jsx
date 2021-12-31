import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import { Form, Input, InputNumber, Button } from 'antd';
export default function About() { 
    return (
        
        <div>
            <HelmetProvider>
                    <Helmet>
                        <title>ழகரம் |   பற்றி</title>
                    </Helmet>
            </HelmetProvider>
            
        </div>
    )
}

  
}