import styles from "../../styles/cart.module.scss";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../cartitem/cartItem";
import $ from "jquery";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

function Cart({ show, onClose }) {
  const router = useRouter();
  // // const [isBrowser, setIsBrowser] = useState(false);
  // const modalWrapperRef = useRef();
  // // console.log("show:", show);
  // // // check if the user has clicked inside or outside the modal
  // const backDropHandler = (e) => {
  //   if (show === true) {
  //     if (!modalWrapperRef?.current?.contains(e.target)) {
  //       onClose();
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("click", () => backDropHandler());
  //   return () => window.removeEventListener("click", () => backDropHandler());
  // }, []);

  return (
    <>
      (
      {show && (
        <div className={styles.container}>
          <div className={styles.cartContainer}>
            <div className={styles.cartNav} onClick={onClose}>
              <FontAwesomeIcon
                icon={faAngleLeft}
                className={styles.menuBackBtn}
              />
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
              <div
                onClick={() => router.push("/checkout")}
                className={styles.checkoutBtn}
              >
                Continue to checkout
              </div>
            </div>
          </div>
        </div>
      )}
      )
    </>
  );
}

export default Cart;
