import React, { useContext, useState } from 'react';
import {assets} from '../../admin_assets/assets'
import {assets1} from '../../frontend_assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { storeCategory } from '../Context/context';

const Navbar = ({setPopup}) => {
    const [menu, setMenu] = useState('home');
    const navigate = useNavigate()
    const {token,setToken} = useContext(storeCategory)

    const handleLogout = () =>{
      if(localStorage.getItem('token')){
        localStorage.removeItem('token')
        setToken('')
        navigate('/')
      }
    }
  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className='ul'>
        <Link to={'/'} className={menu === 'home'? 'active': ''}onClick={() =>setMenu('home')}>Home</Link>
        <a className={menu === 'menu'? 'active': ''} onClick={() =>setMenu('menu')} href='#menu'>Menu</a>
        <a className={menu === 'mobile-app'? 'active': ''} onClick={() =>setMenu('mobile-app')}href='#mobile'>Mobile-app</a>
        <a className={menu === 'contact'? 'active': ''} onClick={() =>setMenu('contact')} href='#contact'>Contact Us</a>
      </ul> 
      <div className="right">
        <img className='reduce-width' src={assets.search_icon} alt="" />
        <div className="icon">
          <Link to={'/cart'}>
            <img className='reduce-width' src={assets1.basket_icon} alt="" />
          </Link>
            <div className="dot"></div>
        </div>
        {!token?
        <button className='button' onClick={() => setPopup(true)}>Sign in</button>
        :
        <div className='drawdown-icons'>
          <img src={assets.profile_image} alt="" className='profile'/>
          <div className='flex-icon'>
            <ul>
              <li><img src={assets.order_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={handleLogout}><img src={assets1.logout_icon} alt="" />logout</li>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default Navbar;
