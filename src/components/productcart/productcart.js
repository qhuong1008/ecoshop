import { useRouter } from "next/router";
import styles from "../../styles/productcart.module.scss";

function ProductCart() {
  const router = useRouter();
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
      <div
        onClick={() => router.push("/product/1")}
        className={styles.shopNowBtn}
      >
        SHOP NOW
      </div>
    </div>
  );
}

export default ProductCart;
