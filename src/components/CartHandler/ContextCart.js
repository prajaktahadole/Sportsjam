import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import { Footer } from "../footer/footer";
import styles from "./cart.module.css";
import {useNavigate } from "react-router-dom";


const ContextCart = () => {
  const navigate = useNavigate()
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <section className={styles.maincartsection}>
          <h1>shopping Cart</h1>
          <p className={styles.totalitems}>
            you have <span className={styles.totalitemscount}>{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }
  const goCheckout = ()=>{
    navigate ("/Checkout")
  }

  return (
    <>
      <header>
        {/* <div className="continue-shopping">
          <img src="images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div> */}

        {/* <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div> */}
      </header>

      <section className={styles.maincartsection}>
        <h1>shopping Cart</h1>
        <p className={styles.totalitems}>
          you have <span className={styles.totalitemscount}>{totalItem} </span> items
          in shopping cart
        </p>

        <div className={styles.cartitems}>
          <div className={styles.cartitemscontainer}>
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className={styles.cardtotal}>
          <h3>
            Cart Total : <span>₹ {totalAmount}</span>
          </h3>
          <button onClick={goCheckout}>checkout</button>
          <button className={styles.clearcart} onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ContextCart;