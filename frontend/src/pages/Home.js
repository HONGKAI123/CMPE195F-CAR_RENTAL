import React from 'react';
import './Home.css';
import {
  Container,
} from 'react-bootstrap';
import bgimg from '../res/backg.jpg'

import Default from '../components/Default';

function Home() {
  return (
    <Default>
       
       <div class= 'bgimg'>
         
         <img src = "./backg.jpg"  />
         
          <div class='text1'><h1>Start Looking for your dream car!{' '}</h1>
             <div><a href='./Login' className='learn'><h2>Learn More</h2></a></div>


          </div>
       
       
       
       
       
       
       
       
       </div>  
              
          








    </Default>  
       
       
       
       
       
     
  );
}

export default Home;