import {
  faAngleLeft,
  faAngleRight,
  faBars,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/product.module.scss";

function Product() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImage}>
        <img
          src="https://ecosmartvietnam.com/static/img/products/product_page_5.jpg"
          alt=""
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productName}>Dầu dưỡng Hoàng Lan</div>
        <div className={styles.productPrice}>₫ 100.000</div>
        <div className={styles.starRating}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
    </div>
  );
}

export default Product;
