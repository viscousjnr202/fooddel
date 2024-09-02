import React, { useContext, useState } from "react";
import { assets1 } from '../../frontend_assets/assets';
import './FoodItem.css'
import { storeCategory } from "../Context/context";

const FoodItem = ({item}) => {
    const {_id} = item
    const [countItem, setCountItem] = useState(0);
    const {cartItem, increaseCart, decreaseCart, url} = useContext(storeCategory)
  return (
    <div className="item">
      <img className="food-image" src={url+ '/images/'+ item.image} alt="" />
      {!cartItem[_id] ? <img src={assets1.add_icon_white} className="add-icon" onClick={() => increaseCart(_id)} alt=""/> 
      : 
      <div className="count-increase-decrease">
        <img src={assets1.remove_icon_red} onClick={() => decreaseCart(_id)} alt=""/>
        {cartItem[_id]}
        <img src={assets1.add_icon_green} onClick={() => increaseCart(_id)} alt=""/>
      </div>}
      <div className="flex-item">
        <h2>{item.name}</h2>
        <img className="rate-icon" src={assets1.rating_starts} alt=""/>
      </div>
      <p className="food-item-text p-text-margin">{item.description}</p>
      <p className="price food-item-text p-text-margin">${item.price}</p>
    </div>
  );
};

export default FoodItem;
