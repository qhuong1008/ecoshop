import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ProductCart from "@/components/productcart/productcart";
import { useRouter } from "next/router";
import styles from "../styles/home.module.scss";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className={styles.homepageCover}>
        <div className={styles.coverTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
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
