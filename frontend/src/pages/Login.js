import React from 'react'
import Default from '../components/Default';
import {Row , Col , Form , Input, Button} from 'antd'
import FormItem from 'antd/lib/form/FormItem';
import './login.css';
import "antd/dist/antd.css";


function Login() {
  return (
    <Default> 
      
      
      
      
      <div className='login' >

        <Row gutter={16} >
          <Col lg={16} className='img1'>
          <img src='./car1.jpg' height= '100%' width='200%'/></Col>
          <Col lg={8} className='text-box '>
            <Form layout='vertical' className='login-box p-4'>
              <h1>Login to start your trip</h1>
              <Form.Item name='username' label='Username' rules={[{required: true, message:'Please enter your username'}]}>
                             <Input/>
                         </Form.Item>
                <FormItem name ='password' label ='Password' rules = {[{required: true, message:'Please enter your password'}]}>
                    <Input type='password'/>
                </FormItem>

                <Button type="primary" className='btn1'>Login</Button>
              



            </Form>
            </Col>
        </Row>





      </div>
    
    
    
    
    
    
    
    </Default>
  )
}

export default Login