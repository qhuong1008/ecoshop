import { useRouter } from "next/router";
import styles from "../../styles/navbar.module.scss";
function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navLeft}>
          <div
            onClick={() => router.push("/collections")}
            className={styles.navItem}
          >
            Shop
          </div>
          <div
            onClick={() => router.push("https://ecosmartvietnam.com/about-us/")}
            className={styles.navItem}
          >
            About
          </div>
        </div>
        <div className={styles.navCenter} onClick={() => router.push("/")}>
          <img
            src="https://ecosmartvietnam.com/static/img/aboutus/logo.png"
            alt=""
          />
        </div>
        <div className={styles.navRight}>
          <div
            onClick={() => router.push("/mycart")}
            className={styles.navItem}
          >
            Cart
          </div>
          <div
            onClick={() => router.push("/myaccount")}
            className={styles.navItem}
          >
            My Account
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
