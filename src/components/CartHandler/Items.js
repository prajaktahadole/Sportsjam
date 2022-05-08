import React, { useContext } from "react";
import { CartContext } from "./Cart";
import styles from "./cart.module.css";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className={styles.itemsinfo}>
        <div className={styles.productimg}>
          <img src={img} alt="iamge" />
        </div>

        <div className={styles.title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.addminusquantity}>
          <i
            className={styles.fasfaminusminus}
            onClick={() => decrement(id)}
            style={{ cursor: "pointer" }}
          >
            -
          </i>
          <input type="text" placeholder={quantity} disabled />
          <i
            className={styles.fasfaplusadd}
            onClick={() => increment(id)}
            style={{ cursor: "pointer" }}
          >
            +
          </i>
        </div>

        <div className={styles.price}>
          <h3>₹ {price}</h3>
        </div>

        <div className={styles.removeitem}>
          <i
            className={styles.fasfatrashaltremove}
            onClick={() => removeItem(id)}
          ></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
