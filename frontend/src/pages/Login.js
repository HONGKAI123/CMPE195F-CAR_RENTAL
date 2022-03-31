import React, { useState } from 'react'
import Default from '../components/Default';
import {Row , Col , Form , Input, Button} from 'antd'
import FormItem from 'antd/lib/form/FormItem';
import './login.css';
import "antd/dist/antd.css";






function Login() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('')

  const checkvisiable =()=>{
    return (username ==='' || password==='')
  }
  return (
    <Default> 
      
      
      
      
      <div className='login' >

        <Row gutter={16} >
          <Col lg={16} className='img1'>
          <img src='./car1.jpg' height= '100%' width='200%'/></Col>
          <Col lg={8} className='text-box p-5'>
            <Form layout='vertical' className='login-box p-5'>
              <h1>Login to start your trip</h1>
              <FormItem name='username' label='Username' rules={[{required: true, message:'Please enter your username'}]}>
                             <Input onChange={(e)=>{setUserName(e.target.value)}} />
                         </FormItem>
                <FormItem name ='password' label ='Password' rules = {[{required: true, message:'Please enter your password'}]}>
                    <Input type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                </FormItem>

                <button disabled= {checkvisiable()} className='btn1'><h2>Login</h2></button>
                 
                 <div id='kennthdad'>
                   <a href='./Register' className='kennth'>Not a member? Click to register</a>
                   </div>
                
              



            </Form>
          </Col>
        </Row>





      </div>
    
    
    
    
    
    
    
    </Default>
  )
}

export default Login