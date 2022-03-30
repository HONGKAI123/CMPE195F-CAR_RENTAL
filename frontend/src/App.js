
import './App.css';
import { BrowserRouter, Route, } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import CarList from './pages/CarList';
import CustomNavbar from './components/customNavbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
     
        <Route path='/' exact component = {Home}/>
        <Route path='/login' exact component = {Login}/>
        <Route path='/register' exact component = {Register}/>
        <Route path='/bookingcar'  exact component = {BookingCar}/>
        <Route path='/carlist'  exact component = {CarList}/>


        
       
      
      </BrowserRouter>

     
      
    </div>
  );
}

export default App;
