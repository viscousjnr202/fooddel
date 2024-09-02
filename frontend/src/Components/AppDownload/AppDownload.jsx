import React from 'react';
import { assets1 } from '../../frontend_assets/assets';
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='mobile'>
      <h2>For Better Experience Download <br/> Tomato App</h2>
      <div className="download-icon">
        <img src={assets1.play_store} alt="" />
        <img src={assets1.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
