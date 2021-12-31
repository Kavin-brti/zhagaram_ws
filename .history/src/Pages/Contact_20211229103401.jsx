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
            <Form.Item name={['user', 'number']} label="தொடர்பு எண்" >
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'regnumber']} label="பதிவு எண்" >
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="மின்னஞ்சல் முகவரி " rules={[{ type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'year']} label=" ஆண்டு  " >
                <Select defaultValue="I">
                    <Option value="A">I</Option>
                    <Option value="B">II</Option>
                    <Option value="C">III</Option>
                    <Option value="D">IV</Option>
                    <Option value="D">V</Option>
                </Select>
           </Form.Item>
            <Form.Item name={['user', 'department']} label="துறை ">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'section']} label=" பிரிவு  " >
                <Select defaultValue="A">
                    <Option value="A">A</Option>
                    <Option value="B">B</Option>
                    <Option value="C">C</Option>
                    <Option value="D">D</Option>
                </Select>
           </Form.Item>
            <Form.Item name={['user', 'feedback']} label="கருத்து ">
                <Input.TextArea />
            </Form.Item>
            <Form.Item>
                <Button style={{marginLeft:460}} type="primary" htmlType="submit">
                சமர்ப்பி 
                </Button>
            </Form.Item>
    </Form>
        </div>
    )

    }
  
    // 
    // 
    //
    // 
    //
    // 