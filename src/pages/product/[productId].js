import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import styles from "../../styles/productPage.module.scss";
import {
  faCheck,
  faCircleCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function Product() {
  const [oneTimePurchase, setOneTimePurchase] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  return (
    <div>
      <Navbar />
      <div className={styles.productContainer}>
        <section className={styles.productMain}>
          <div className={styles.productImg}>
            <img
              src="https://ecosmartvietnam.com/static/img/products/product_page_3.jpg"
              alt=""
            />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productName}>Dầu dưỡng hoàng lan</div>
            <div className={styles.reviewContainer}>
              <label>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </label>
              2913 reviews
            </div>
            <ul className={styles.productDesc}>
              <li>100% recycled paper (no virgin trees used!)</li>
              <li>100% recycled paper (no virgin trees used!)</li>
              <li>100% recycled paper (no virgin trees used!)</li>
              <li>100% recycled paper (no virgin trees used!)</li>
              <li>100% recycled paper (no virgin trees used!)</li>
            </ul>
            <div className={styles.productPurchaseType}>
              <div className={styles.header}>Purchase type</div>
              <div className={styles.purchaseTypeList}>
                <div
                  className={
                    oneTimePurchase
                      ? `${styles.purchaseTypeItem} ${styles.purchaseTypeItemChecked}`
                      : `${styles.purchaseTypeItem}`
                  }
                  onClick={() => setOneTimePurchase(!oneTimePurchase)}
                >
                  <div className={styles.checkboxBtn}>
                    {/* <input type="checkbox" name="" /> */}
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className={styles.info}>One-time purchase</div>
                </div>
                <div
                  className={
                    subscribe
                      ? `${styles.purchaseTypeItem} ${styles.purchaseTypeItemChecked}`
                      : `${styles.purchaseTypeItem}`
                  }
                  onClick={() => setSubscribe(!subscribe)}
                >
                  <div className={styles.checkboxBtn}>
                    {/* <input type="checkbox" name="" /> */}
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className={styles.info}>Subscribe</div>
                </div>
              </div>
            </div>
            <div className={styles.addToCartBtn}>Add to cart</div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
