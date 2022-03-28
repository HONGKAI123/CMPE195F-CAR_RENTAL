
import './App.css';
import { BrowserRouter, Route, } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import CustomNavbar from './components/customNavbar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <CustomNavbar />
        <Route path='/home' exact component = {Home}/>
        <Route path='/login' exact component = {Login}/>
        <Route path='/register' exact component = {Register}/>
        <Route path='/bookingcar'  exact component = {BookingCar}/>
       
      
      </BrowserRouter>

     
      
    </div>
  );
}

export default App;
