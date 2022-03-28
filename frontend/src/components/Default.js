import React from 'react'

function Default(props) {
  return (
    <div>
      <div className='header bs'>
           <div className='d-flex'>
                <h1>YIYI RENTAL</h1>    
                
                
                
                <button> user</button>
           </div>
      </div>
    
      <div className='content'>
          {props.children}
          
          
          
    </div>
    </div>
  )
}

export default Default