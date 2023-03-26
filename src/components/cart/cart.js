import styles from "../../styles/cart.module.scss";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../cartitem/cartItem";
function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        <div className={styles.cartNav}>
          <FontAwesomeIcon icon={faAngleLeft} className={styles.menuBackBtn} />
          <div className={styles.title}>My Cart</div>
        </div>

        <div className={styles.cartListContainer}>
          <div className={styles.cartBanner}>
            <marquee class="marq" direction="left" loop="">
              FREE SHIPPING ON ALL ORRDERS OVER $32
            </marquee>
          </div>
          <div className={styles.cartList}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className={styles.checkout}>
          <div className={styles.subtotalInfo}>
            <div className={styles.title}>subtotal</div>
            <div className={styles.number}>đ 300.000</div>
          </div>
          <div className={styles.checkoutBtn}>Continue to checkout</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
