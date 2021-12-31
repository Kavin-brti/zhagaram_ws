import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import { Form, Input, Button, Option } from 'antd';
import '../Stylesheets/style.css'
export default function Contact() { 
    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 8 },
        
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
            <Form.Item name={['user', 'name']} label="  பெயர் " rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="தொடர்பு எண்" rules={[{ type: 'email' }]}>
                <Input />
            </Form.Item>
            <Input.Group compact>
                <Select defaultValue="A">
                    <Option value="A">A</Option>
                    <Option value="B">B</Option>
                </Select>
                <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
           </Input.Group>
            <Form.Item name={['user', 'website']} label="Website">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Introduction">
                <Input.TextArea />
            </Form.Item>
            <Form.Item>
                <Button style={{marginLeft:440}} type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
    </Form>
        </div>
    )

    }
  
    // 
    // மின்னஞ்சல் முகவரி 
    // ஆண்டு
    // துறை 
    // பிரிவு 
    // கருத்து 