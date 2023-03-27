import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import styles from "../styles/checkout.module.scss";

function Checkout() {
  return (
    <>
      <Navbar />
      <div className={styles.checkoutContainer}>
        <div className={styles.checkoutHeader}>Checkout</div>
        <div className={styles.checkoutFlex}>
          <div className={styles.checkoutInfo}>
            <div className={styles.contactInformation}>
              <div className={styles.contactHeader}>
                Customer & shipping information
              </div>
              <div className={styles.emailSection}>
                <label className={styles.checkoutEmail}>Email</label>
                <input type="text" name="" placeholder="Email" />
              </div>
            </div>
            <div className={styles.shippingInformation}>
              <div className={styles.shippingHeader}>Shipping address</div>
              <div className={styles.shippingInputSection}>
                <div className={styles.shippingInputItem}>
                  <label>First name</label>
                  <input type="text" placeholder="First name" />
                </div>
                <div className={styles.shippingInputItem}>
                  <label>Last name</label>
                  <input type="text" placeholder="Last name" />
                </div>
                <div className={styles.shippingInputItem}>
                  <label>Company</label>
                  <input type="text" placeholder="Company (Optional)" />
                </div>
                <div className={styles.shippingInputItem}>
                  <label>Address</label>
                  <input type="text" placeholder="Address" />
                </div>
                <div className={styles.shippingInputItem}>
                  <label>Apt, suite, etc.</label>
                  <input
                    type="text"
                    placeholder="Apt, suite, etc. (Optional)"
                  />
                </div>
                <div className={styles.shippingInputItem}>
                  <label>City</label>
                  <input type="text" placeholder="City" />
                </div>
                <div className={styles.shippingInputItem}>
                  <label>First name</label>
                  <input type="text" placeholder="First name" />
                </div>
                <div className={styles.shippingInputItem}>
                  <label>ZIP code</label>
                  <input type="text" placeholder="ZIP code" />
                </div>
                <div className={styles.shippingInputItem}>
                  <label>Phone</label>
                  <input type="text" placeholder="Phone" />
                </div>
              </div>
            </div>
            <div className={styles.acceptTerm}>
              <input type="checkbox" name="" />
              <div className={styles.agreeMsg}>
                *I agree to receive recurring automated marketing text messages
                (e.g. cart reminders) at the phone number provided. Consent is
                not a condition to purchase. Msg & data rates may apply. Msg
                frequency varies. Reply HELP for help and STOP to cancel. View
                our
                <label>
                  <a href="/policies/privacy-policy"> Terms of Service </a>
                </label>
                and
                <label>
                  <a href="/policies/privacy-policy"> Privacy Policy</a>
                </label>
              </div>
            </div>
            <div className={styles.checkoutActions}>
              <a href="/cart">Return to cart</a>
              <div className={styles.continueBtn}>Continue</div>
            </div>
          </div>
          <div className={styles.checkoutOrder}>
            <div className={styles.orderHeader}>Order information</div>
            <div className={styles.headerRuler}></div>
            <div className={styles.orderList}>
              <div className={styles.orderItemContainer}>
                <div className={styles.orderItem}>
                  <div className={styles.orderInfo}>
                    <img
                      src="https://ecosmartvietnam.com/static/img/products/product_page_3.jpg"
                      alt=""
                    />
                    <div className={styles.productName}>
                      Dầu dưỡng Hoàng Lan x <label>2</label>
                    </div>
                  </div>
                  <div className={styles.orderPrice}>đ 120.000</div>
                </div>
                <div className={styles.orderRuler}></div>
              </div>
              <div className={styles.orderItemContainer}>
                <div className={styles.orderItem}>
                  <div className={styles.orderInfo}>
                    <img
                      src="https://ecosmartvietnam.com/static/img/products/product_page_3.jpg"
                      alt=""
                    />
                    <div className={styles.productName}>
                      Dầu dưỡng Hoàng Lan x <label>2</label>
                    </div>
                  </div>
                  <div className={styles.orderPrice}>đ 120.000</div>
                </div>
                <div className={styles.orderRuler}></div>
              </div>
              <div className={styles.orderItemContainer}>
                <div className={styles.orderItem}>
                  <div className={styles.orderInfo}>
                    <img
                      src="https://ecosmartvietnam.com/static/img/products/product_page_3.jpg"
                      alt=""
                    />
                    <div className={styles.productName}>
                      Dầu dưỡng Hoàng Lan x <label>2</label>
                    </div>
                  </div>
                  <div className={styles.orderPrice}>đ 120.000</div>
                </div>
                <div className={styles.orderRuler}></div>
              </div>
            </div>
            <div className={styles.orderRuler}></div>
            <div className={styles.orderSummary}>
              <div className={styles.orderSummaryItem}>
                <label>Subtotal</label>
                <div className={styles.info}>đ 300.000</div>
              </div>
              <div className={styles.orderSummaryItem}>
                <label>Shipping</label>
                <div className={styles.info}>_____</div>
              </div>
              <div className={styles.orderSummaryItem}>
                <label>Taxes</label>
                <div className={styles.info}>_____</div>
              </div>
            </div>
            <div className={styles.orderRuler}></div>
            <div className={styles.orderTotal}>
              <label>Total</label>
              <div className={styles.info}>đ 500.000</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
