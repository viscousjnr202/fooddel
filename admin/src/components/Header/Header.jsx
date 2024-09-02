import React from 'react';
import './Header.css'
import {assets} from '../../admin_assets/assets'
const Header = () => {
  return (
    <div className='header'>
      <img className='img1' src={assets.logo} alt="" />
      <img className='img2' src={assets.profile_image} alt="" />
    </div>
  );
}

export default Header;
