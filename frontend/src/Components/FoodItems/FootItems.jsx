import React, { useContext } from "react";
import { storeCategory } from "../Context/context";
import "./FoodItems.css";
import FoodItem from "../FoodItem/FoodItem";

const FootItems = ({ category }) => {
  const { allFoods} = useContext(storeCategory);
  // console.log(allFood);
  return (
    <div className="food-items" id="menu">
      <h2 className="top-dishes">Top dishes near you</h2>
      <div className="food-item">
        {category !== "All" ?
          allFoods
            .filter((filterItem) => filterItem.category === category)
            .map((item, index) => {
              return <FoodItem key={index} item={item} />;
            }) :
        allFoods 
          .map((item, index) => {
              return <FoodItem key={index} item={item} />;
          })}
      </div>
    </div>
  );
};

export default FootItems;
