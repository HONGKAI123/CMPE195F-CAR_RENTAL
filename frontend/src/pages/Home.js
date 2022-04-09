import React from 'react';
import './Home.css';
import {
  Container,
} from 'react-bootstrap';
import bgimg from '../res/backg.jpg'
import 'animate.css';

import Default from '../components/Default';

function Home() {
  return (
    <Default>
       
       <div class= 'bgimg'>
         
         <img src = "./backg.jpg"  />
         
          <div class='text1'><h1 class="animate__animated animate__backInDown animate__delay-2s">Start Looking for your dream car!{' '}</h1>
             <div><a href='./Login' className='learn'><h2 class = "animate__animated animate__backInUp animate__delay-3s">Learn More</h2></a></div>


          </div>
       
       
       
       
       
       
       
       
       </div>  
              
          








    </Default>  
       
       
       
       
       
     
  );
}

export default Home;