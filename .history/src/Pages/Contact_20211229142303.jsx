import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import { Form, Input, Button,Select,Card } from 'antd';
import '../Stylesheets/style.css'
import img1 from '../Images/banner.png'
const { Meta } = Card;

export default function Contact() { 
    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 8 },
        
      };
      const onSubmit =()=>{
          console.log("Submitted");
      }
      const { Option } = Select;
    return (
        
        <div>
            <HelmetProvider>
                    <Helmet>
                        <title>ழகரம் | தொடர்புக்கு</title>
                    </Helmet>
            </HelmetProvider>
            <div className="title-pongal">
               <h1 style={{color:"#ffffff"}}>தொடர்புக்கு</h1>
           </div>
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
                <Select placeholder="ஆண்டு">
                    <Option value="1">I</Option>
                    <Option value="2">II</Option>
                    <Option value="3">III</Option>
                    <Option value="4">IV</Option>
                    <Option value="5">V</Option>
                </Select>
           </Form.Item>
            <Form.Item name={['user', 'department']} label="துறை ">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'section']} label=" பிரிவு  " >
                <Select placeholder="பிரிவு">
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
                <Button onSubmit={onSubmit} style={{marginLeft:500}} type="primary" htmlType="submit">
                சமர்ப்பி 
                </Button>
            </Form.Item>
    </Form>
<div className="card-data">
<div className="card-content" >
        <h3>சன்மதி சந்திரமோஹன்</h3>
        <h4>செயலாளர்</h4>
        <p>9865987177</p>   
        <span>shanmathic.18cse@kongu.edu</span>
         </div>
    <div className="card-content" >
        <h3>பவ்யதர்ஷினி </h3>
        <h4>பொருளாளர்</h4>
        <p>6379553751</p>
        <span>bhavyadharshinik.18civil@kongu.edu</span>
    </div>
</div>
   

        </div>
    )}



  
    // 
    // 
    //
    // 
    //
    // 