import React from 'react';
import { menu_list } from '../../frontend_assets/assets';
import './ExploreMenu.css'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu'>
      <h2>
        Explore Our Menu
      </h2>
      <p className='explore-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission ist satisfyyour cravings and elevate your during experiences, one delicious meal at a time</p>
      <div className="explore-menu-list">
        {menu_list.map((list, index) =>{
            return(
                <div className="menu-list" key={index} onClick={() => setCategory(prev => prev===list.menu_name?'All': list.menu_name)}>
                    <img src={list.menu_image} alt="" className={category=== list.menu_name? 'active-1' : ''}/>
                    <p className='p-text'>{list.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
