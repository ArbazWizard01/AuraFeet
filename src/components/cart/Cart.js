import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./cart.css";

const Cart = () => {


  const { cartItems, increaseQuantity, decreaseQuantity, deleteItem, isCartOn, cartOn } =
    useContext(CartContext);

  return (
    <div className={`cart-container ${isCartOn ? "cart-slide" : ""}`}>
      <div className="close-cart" onClick={cartOn}><FaArrowLeftLong /></div>
      <h2>SHOPPING CART</h2>
      {cartItems.length === 0 ? (
        <p>Your AuraFeet cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className="cart-item-img">
                <img src={item.url} alt={item.content.shoeName} width="100" />
              </div>
              <div className="cart-content">
                <strong>{item.content.shoeName}</strong>
                <div className="cart-item-price">₹{item.price}</div>
                {/* <p>{item.content.description}</p> */}
              </div>
              <div className="quantity-manage">
                <div
                  className="quantity-btn"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  <FaMinus />
                </div>
                <div>{item.quantity}</div>

                <div
                  className="quantity-btn"
                  onClick={() => increaseQuantity(item.id)}
                >
                  <FaPlus />
                </div>
              </div>

              <div className="itemTotalPrice">
                <b>₹{item.price * item.quantity}</b>
              </div>
              <div className="cancel-item" onClick={()=> deleteItem(item.id)}>
                <IoMdCloseCircle />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
