import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ProductCart from "@/components/productcart/productcart";
import { useRouter } from "next/router";
import styles from "../styles/home.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
export default function Home(props) {
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
          Shop now
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
