import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ProductCart from "@/components/productcart/productcart";
import { useRouter } from "next/router";
import styles from "../styles/home.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import React from "react";
import { useState, useEffect } from "react";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
export default function Home(props) {
  // avoid not matching server-rendered HTML
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  const { t } = useTranslation();

  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className={styles.homepageCover}>
        <div className={styles.coverTitle}>{t("home:coverTitle")}</div>
        <div
          className={styles.shopNowBtn}
          onClick={() => router.push("/collections")}
        >
          {hydrated && t("home:shopNowBtn")}
        </div>
      </div>
      <div className={styles.homeProducts}>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
      <div className={styles.shopAllRuler}>
        <div className={styles.rulerLeft}></div>
        <div
          className={styles.shopAllBtn}
          onClick={() => router.push("/collections")}
        >
          Shop All Products
        </div>
        <div className={styles.rulerRight}></div>
      </div>
      <Footer />
    </>
  );
}
