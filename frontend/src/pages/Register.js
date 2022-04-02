import React , {useState} from 'react'
import Default from '../components/Default';
import {Row , Col , Form , Input, Button} from 'antd'
import FormItem from 'antd/lib/form/FormItem';
import './login.css';
import "antd/dist/antd.css";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function Register() {
  let history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [cfmpassword, setCPassword] = useState('');
  
  const checkButtonVisibility = () => {
    return ( (password === '') || (userName === '') || (cfmpassword === '') || (password !== cfmpassword) )
  }
  console.log(userName, password)

  const handleSubmitButtonClick = () => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/register',
      data: {
        username: userName,
        password: password,
      }
    })
    .then((res) => {
      history.push('/login');
      console.log(res.data);
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
          <Col lg={8} className='text-box p-5 '>
            <Form layout='vertical' className='login-box p-5'>
              <h1>Sign up to start your trip</h1>
              <FormItem name='username' label='Username' rules={[{required: true, message:'Please enter your username'}]}>
                <Input onChange={(e) => {setUserName(e.target.value)}}/>
              </FormItem>
              <FormItem name ='password' label ='Password' rules = {[{required: true, message:'Please enter your password'}]}>
                <Input type='password' onChange={(e) => {setPassword(e.target.value)}}/>
              </FormItem>
                      
              <FormItem name ='cpassword' label ='ConfrimPassword' rules = {[{required: true, message:'Please enter your password'}]}>
                <Input type='password' onChange={(e) => {setCPassword(e.target.value)}}/>
              </FormItem>


              <button disabled={checkButtonVisibility()}  type="primary" className='btn1' onClick={handleSubmitButtonClick}><h2>Sign Up</h2></button>



              <div>
              <a href='./login'>Already a member? Click to Login</a>
              </div>
            </Form>
            </Col>
        </Row>
      </div>
    </Default>
  )
}

export default Register