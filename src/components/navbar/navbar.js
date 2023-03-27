import { useRouter } from "next/router";
import styles from "../../styles/navbar.module.scss";
import { useTranslation } from "next-i18next";
import React from "react";
import { useState, useEffect } from "react";
import Cart from "../cart/cart";

function Navbar() {
  const router = useRouter();
  // avoid not matching server-rendered HTML
  const [hydrated, setHydrated] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { t } = useTranslation();
  console.log(showCart);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navLeft}>
          <div
            onClick={() => router.push("/collections")}
            className={styles.navItem}
          >
            {hydrated && t("navbar:shop")}
          </div>
          <div
            onClick={() => router.push("https://ecosmartvietnam.com/about-us/")}
            className={styles.navItem}
          >
            {hydrated && t("navbar:about")}
          </div>
        </div>
        <div className={styles.navCenter} onClick={() => router.push("/")}>
          <img
            src="https://ecosmartvietnam.com/static/img/aboutus/logo.png"
            alt=""
          />
        </div>
        <div className={styles.navRight}>
          <div onClick={() => setShowCart(true)} className={styles.navItem}>
            {hydrated && t("navbar:cart")}
          </div>
          <div
            onClick={() => router.push("/myaccount")}
            className={styles.navItem}
          >
            {hydrated && t("navbar:myAccount")}
          </div>
        </div>
      </div>
      {showCart && <Cart show={showCart} onClose={() => setShowCart(false)} />}
    </>
  );
}

export default Navbar;
