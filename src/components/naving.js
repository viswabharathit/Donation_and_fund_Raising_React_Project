import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Nav = () => {
  return (
    <div className="divclass"> 
      <nav className="navstyle">
        <img src={logo} className='logostyle'/>
        <h2 className='logoname'>OPEN DOORS</h2>
        <li><Link to='/' className='buttonstyle'>HOME</Link></li>
        <li><Link to='/how' className='buttonstyle'>FUND RAISER</Link></li>
        <li><Link to='/dash' className='buttonstyle'>DASH BOARD</Link></li>
        <li><Link to='/register' className='buttonstyle'>REGISTER</Link></li>
        <li><Link to='/login' className='buttonstyle'>LOGIN</Link></li>
        <li><Link to='/browse' className='buttonstyle'>BROWSE FUND RAISERS</Link></li>
      </nav>
    </div>
  );
};
export default Nav;