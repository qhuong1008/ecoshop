import styles from "../../styles/productcart.module.scss";

function ProductCart() {
  return (
    <div className={styles.productCartContainer}>
      <div className={styles.productCartImg}>
        <img
          src="https://ecosmartvietnam.com/static/img/products/product_page_3.jpg"
          alt="product image"
        />
      </div>
      <div className={styles.productTitle}>Tinh dầu hoa hồng</div>
      <div className={styles.productPrice}>100.000 VND</div>
      <div className={styles.shopNowBtn}>SHOP NOW</div>
    </div>
  );
}

export default ProductCart;
