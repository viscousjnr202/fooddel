import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { storeCategory } from "../../Components/Context/context"
import './Cart.css'
const Cart = () => {
  const { food_list, cartItem , decreaseCart, getTotalAmount} = useContext(storeCategory);
  return (
    <div className="cart">
      <div className="cart-items cart-items-color">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {food_list.map((item, index) => {
        if (cartItem[item._id] > 0) {
          return (
            <>
              <div className="cart-items cart-items-margin">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price * cartItem[item._id]}</p>
                <p className="cross" onClick={() => decreaseCart(item._id)}>x</p>
              </div>
              <hr />
            </>
          );
        }
      })}
      <div className="promo-code">
        <div className="promo-code-left">
            <h2>Cart Tools</h2>
            <div className="info">
                <p>Subtotal</p>
                <p className="num">{getTotalAmount()}</p>
            </div>
                <hr />
            <div className="info">
                <p>Delivery Fees</p>
                <p className="num">{getTotalAmount()=== 0? 0 : 2}</p>
            </div>
                <hr />
            <div className="info">
                <p>Total</p>
                <p className="num">{getTotalAmount()=== 0? 0 : getTotalAmount()+2}</p>
            </div>
                <hr />
          
        <button> <Link to={'/order'}>PROCEED TO ACCOUNT</Link> </button>
        </div>
        <div className="promo-code-right">
            <p>If you have promo code, Enter it here</p>
            <div className="input">
                <input type="text" placeholder="Enter code"/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
