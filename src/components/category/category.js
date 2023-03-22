import styles from "../../styles/category.module.scss";

function Category() {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryTitle}>Collections</div>
      <div className={styles.categoryList}>
        <div className={`${styles.categoryItem} ${styles.active}`}>
          Category 1
        </div>
        <div className={styles.categoryItem}>Category 2</div>
        <div className={styles.categoryItem}>Category 3</div>
        <div className={styles.categoryItem}>Category 4</div>
        <div className={styles.categoryItem}>Category 5</div>
      </div>
    </div>
  );
}

export default Category;
