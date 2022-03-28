import React from 'react'

function Default(props) {
  return (
    <div>
      <div className='header'>
           <div className='d-flex'>
                <h1>car rental</h1>    
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