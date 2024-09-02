import React, { useContext } from "react";
import "./PlaceOrder.css";
import { storeCategory } from "../../Components/Context/context";
const PlaceOrder = () => {
  const {getTotalAmount} = useContext(storeCategory);
  return (
    <div className="order-container">
      <div className="form-container-left">
        <form action="">
          <h2>Delivery Information</h2>
          <div className="display-flex">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <div className="display-flex">
            <input type="email" placeholder="Email address" required />
            <input type="text" placeholder="Street" />
          </div>
          <div className="display-flex">
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="State" required />
          </div>
          <div className="display-flex">
            <input type="text" placeholder="Zip code" required />
            <input type="text" placeholder="Country" required />
          </div>
          <input type="text" placeholder="Phone" required />
        </form>
      </div>
      <div className="form-container-right">
        <h2>Cart Tools</h2>
        <div className="cart-tools">
          <p>Delivery Fee</p>
          <p>${getTotalAmount() > 0 ? 2 : 0}</p>
        </div>
        <hr />
        <div className="cart-tools">
          <p>Subtotal</p>
          <p>{getTotalAmount() >0 ?getTotalAmount(): 0}</p>
        </div>
        <hr />
        <div className="cart-tools bold">
          <p>Total</p>
          <p>${getTotalAmount()> 0?getTotalAmount()+2: 0}</p>
        </div>
        <button>PROCCED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
