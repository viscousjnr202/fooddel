import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../admin_assets/assets";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    const [active, setactive] = useState('active');
  return (
    <div className="sidebar">
      <div className="padding">
        <NavLink className='link sidebar-icon' to={'/add'}>
            <img src={assets.add_icon} alt="" />
            <p>Add Items</p>
        </NavLink>
        <NavLink className='link sidebar-icon' to={'/list'}>
            <img src={assets.order_icon} alt="" />
            <p>List Items</p>
        </NavLink>
          <NavLink to={'/order'} className="sidebar-icon link">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
          </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
