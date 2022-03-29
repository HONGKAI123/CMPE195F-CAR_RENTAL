import React from 'react'
import CustomNavbar from './customNavbar'
import Footer from './footer'

function Default(props) {
  return (
    <div>
      <div className='header-bs'>
        <CustomNavbar/>
        
           
      </div>
      
    
      <div className='content'>
          {props.children}
          
          
          
    </div>
    <Footer/>
      
    </div>
    
  )
}

export default Default