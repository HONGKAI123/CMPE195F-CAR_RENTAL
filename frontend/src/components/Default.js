import React from 'react'
import CustomNavbar from './customNavbar'

function Default(props) {
  return (
    <div>
      <div className='header-bs'>
        <CustomNavbar/>
           
      </div>
    
      <div className='content'>
          {props.children}
          
          
          
    </div>
    </div>
  )
}

export default Default