import Category from "@/components/category/category";
import Navbar from "@/components/navbar/navbar";
import Sortbar from "@/components/sortbar/sortbar";
import Product from "@/components/product/product";
import styles from "../../styles/collections.module.scss";
import Footer from "@/components/footer/footer";
function Collections() {
  return (
    <div className={styles.collectionsContainer}>
      <Navbar />
      <div className={styles.collectionBanner}>All Products</div>
      <div className={styles.collectionContainer}>
        <div className={styles.collectionCategory}>
          <Category />
        </div>
        <div className={styles.collectionDetail}>
          <Sortbar />
          <section className={styles.collectionProductList}>
            <div className={styles.title}>
              <span>Category 1</span>
              <div className={styles.ruler}></div>
            </div>
            <div className={styles.productList}>
              <div className={styles.productItem}>
                <Product />
              </div>
              <div className={styles.productItem}>
                <Product />
              </div>
              <div className={styles.productItem}>
                <Product />
              </div>
              <div className={styles.productItem}>
                <Product />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Collections;
