import React from 'react'
import Default from '../components/Default';
import {Row , Col , Form , Input, Button} from 'antd'
import FormItem from 'antd/lib/form/FormItem';
import './login.css'

function Login() {
  return (
    <Default> 
      
      
      
      
      <div className='login' >

        <Row gutter={16} >
          <Col lg={16}></Col>
          <Col lg={8} >
            <Form layout='vertical' className='login-box'>
              <h1>Login to start your trip</h1>
              <Form.Item name='username' label='Username' rules={[{required: true}]}>
                             <Input/>
                         </Form.Item>
                <FormItem name ='password' label ='password' rules = {[{required: true}]}>
                    <Input/>
                </FormItem>

                <Button type="primary" htmlType="submit">
          Submit
        </Button>
              



            </Form>
            </Col>
        </Row>





      </div>
    
    
    
    
    
    
    
    </Default>
  )
}

export default Login