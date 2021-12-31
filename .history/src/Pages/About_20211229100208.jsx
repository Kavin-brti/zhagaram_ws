import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import { Form, Input, Button, InputNumber } from 'antd';
export default function About() { 
    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 6 },
        
      };
    return (
        
        <div>
            <HelmetProvider>
                    <Helmet>
                        <title>ழகரம் |   பற்றி</title>
                    </Helmet>
            </HelmetProvider>
            {/* Form */}
            <Form className="form"  {...layout} name="nest-messages" style={{
                marginTop:150,
            }}>
            <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'website']} label="Website">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Introduction">
                <Input.TextArea />
            </Form.Item>
            <Form.Item>
                <Button style={{marginLeft:760}} type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
    </Form>
        </div>
    )

    }
