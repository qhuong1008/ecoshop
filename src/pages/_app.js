// import ",/styles/globals.css";
import "../styles/global.css";
import { appWithTranslation } from "next-i18next";
import localFont from "next/font/local";

const myFont = localFont({
  src: "./Varela_Round/VarelaRound-Regular.ttf",
});
function App({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
export default appWithTranslation(App);
