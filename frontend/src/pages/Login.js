import React, { useState } from 'react'
import Default from '../components/Default';
import {Row , Col , Form , Input, Button} from 'antd'
import FormItem from 'antd/lib/form/FormItem';
import './login.css';
import "antd/dist/antd.css";
import axios from 'axios'
import { useHistory } from "react-router-dom";






function Login() {


  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const checkvisiable =()=>{
    return (userName ==='' || password==='')
  }


  const loginbuttonclick = () => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/login',
      data: {
        username: userName,
        password: password,
      }
    })
    .then((res) => {
      history.push('/carlist');
    })
    .catch((err) => {
      console.log(err);
    })
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

                <button disabled= {checkvisiable()} className='btn1' onClick={loginbuttonclick}><h2>Login</h2></button>
                 
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