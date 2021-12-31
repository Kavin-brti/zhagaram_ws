import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import { Form, Input, Button, Checkbox } from 'antd';
export default function About() { 
    return (
        
        <div>
            <HelmetProvider>
                    <Helmet>
                        <title>ழகரம் |   பற்றி</title>
                    </Helmet>
            </HelmetProvider>
            {/* Form */}
             <Form
                style={{marginTop:200}}
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 6 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 10, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
        </div>
    )

  
}