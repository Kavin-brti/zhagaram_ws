import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import { Form, Input, Button,Select } from 'antd';
import '../Stylesheets/style.css'
export default function Contact() { 
    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 8 },
        
      };
      const { Option } = Select;
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
            <Form.Item name={['user', 'number']} label="தொடர்பு எண்" rules={[{ type: 'number' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'section']} label=" பிரிவு  " rules={[{ type: 'text' }]}>
                <Select defaultValue="A">
                    <Option value="A">A</Option>
                    <Option value="B">B</Option>
                    <Option value="C">C</Option>
                    <Option value="D">D</Option>
                </Select>
           </Form.Item>
            <Form.Item name={['user', 'department']} label="துறை 
">
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
    // 
    //
    // கருத்து 