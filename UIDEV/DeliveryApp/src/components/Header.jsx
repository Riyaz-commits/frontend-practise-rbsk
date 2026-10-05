import { useState } from 'react';
import {LOGO_URL} from '../../utils/constants'
 const Header = () => {

 const [btnName, setbtnName]=useState("Login")
  
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="AR Food Delivery logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About Us</a></li>
          
          <li> <a href='/contact-us'>Contact Us</a></li>
          <li>Cart</li>
          <button className='login' onClick={()=>{
           btnName==="Login"? setbtnName("Logout"):setbtnName("Login")
          }}> {btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;