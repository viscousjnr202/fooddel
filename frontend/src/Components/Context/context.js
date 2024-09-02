import { createContext, useEffect, useState } from "react";
import { food_list } from "../../frontend_assets/assets";
import axios from "axios";

export const storeCategory = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});
  const [allFoods, setAllFoods] = useState([]);
  const url = "http://localhost:5000";
  const [token, setToken] = useState("");

  const fetchItem = async () => {
    try {
      const response = await axios.get(url + "/api/food/");
      if (response.data.success) {
        setAllFoods(response.data.msg);
      }
    } catch (error) {
        console.log(error)
    }
  };
  useEffect(() => {
    fetchItem()
  }, []);
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      setToken(localStorage.getItem("token"))
      loadCartItems(localStorage.getItem('token'))

    }
  }, []);

  const increaseCart = async (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(url+'/api/cart/addcart',{itemId},{headers: {token:localStorage.getItem('token')}})
   }
  };
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      let findFoodList = food_list.find((food) => food._id === item);
      if (cartItem[findFoodList._id] > 0) {
        totalAmount += findFoodList.price * cartItem[findFoodList._id];
      }
    }
    return totalAmount;
  };

  const decreaseCart = async(itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
       await axios.post(url+'/api/cart/removecart',{itemId},{headers: {token:token}})
    }
  };
  const loadCartItems = async(token) =>{
    const {data} = await axios.post(`${url}/api/cart/getcart`,{},{headers:{token: token}})
    const cartItems = data.msg
    setCartItem(cartItems)
  }
  const stateStore = {
    food_list,
    cartItem,
    setCartItem,
    increaseCart,
    decreaseCart,
    getTotalAmount,
    token,
    setToken,
    url,
    allFoods
  };
  return (
    <storeCategory.Provider value={stateStore}>
      {children}
    </storeCategory.Provider>
  );
};
export default StoreContextProvider;
