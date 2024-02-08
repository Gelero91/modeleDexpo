import '../app/globals.css';
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./app.module.css";

// créer des divs pour forcer l'équart page/header ?

function MyApp({ Component, pageProps }) {
  return (
    <> 
        <Header />
          <div className={styles.pageContainer}>
            <Component {...pageProps} />
          </div>
        <Footer />
    </>
  );
}

export default MyApp;
