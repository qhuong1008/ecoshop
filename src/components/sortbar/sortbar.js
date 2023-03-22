import styles from "../../styles/sortbar.module.scss";
import {
  faAngleLeft,
  faAngleRight,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Sortbar() {
  return (
    <div className={styles.sortbarContainer}>
      <div className={styles.sortbarFilter}>
        <div className={styles.sortbarLabel}>Sắp xếp theo</div>
        <div className={styles.sortbarOptionList}>
          <div className={`${styles.sortbarOptionItem} ${styles.active}`}>
            Phổ biến
          </div>
          <div className={styles.sortbarOptionItem}>Mới nhất</div>
          <div className={styles.sortbarOptionItem}>Bán chạy</div>
          <div className={styles.sortbarOptionItem}>
            <select name="prices" className={styles.priceCombobox}>
              <option value="volvo">Giá: Thấp đến Cao</option>
              <option value="saab">Giá: Cao đến Thấp</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.miniPageController}>
        <div className={styles.miniPageController__state}>
          <span className={styles.miniPageController__current}>1</span>/
          <span className={styles.miniPageController__total}>9</span>
        </div>
        <div className={styles.miniPageController__btn}>
          <div className={styles.miniPageController__prevBtn}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className={styles.miniPageController__nextBtn}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sortbar;
