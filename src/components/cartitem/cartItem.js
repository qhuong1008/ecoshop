import styles from "../../styles/cartItem.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function CartItem() {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/productPage")}>
      <div className={styles.cartItemContainer}>
        <div className={styles.ruler}></div>
        <div className={styles.cartFlex}>
          <img
            src="https://ecosmartvietnam.com/static/img/products/product_page_3.jpg"
            alt="product image"
          />
          <div className={styles.cartRight}>
            <div className={styles.cartInfo}>
              <div className={styles.productTitle}>Tinh dầu hoa hồng</div>
              <div className={styles.cartDeleteBtn}>
                <FontAwesomeIcon icon={faTrash} className={styles.icon} />
              </div>
            </div>
            <div className={styles.cartPrice}>
              <div className={styles.quantities}>
                <div className={styles.btnDecrease}>-</div>
                <input type="" name="" value="1" />
                <div className={styles.btnIncrease}>+</div>
              </div>
              <div className={styles.priceInfo}>đ 120.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
