import { useState } from 'react';
import {LOGO_URL} from '../../utils/constants'
 const Header = () => {

 const [btnName, setbtnName]=useState("Login")
  
  return (
    
    <div className="flex justify-between bg-amber-100 shadow-lg mb-2">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="./index.css" type="text/css" rel="stylesheet" />

      <div className="w-56">
        <img
          className="logo"
          src={LOGO_URL}
          alt="AR Food Delivery logo"
        />
      </div>

      <div className="flex items-center">
        <ul className='flex p-4 m-4'>
          <li className='px-5'><a href='/'>Home</a></li>
          <li className='px-5'><a href='/about'>About Us</a></li>
          
          <li className='px-5'> <a href='/contact-us'>Contact Us</a></li>
          <li className='px-5'>Cart</li>
          <button className='login' onClick={()=>{
           btnName==="Login"? setbtnName("Logout"):setbtnName("Login")
          }}> {btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;