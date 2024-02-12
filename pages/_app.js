import '../app/globals.css';
import Header from "../components/header";
import CategoryBar from "../components/CategoryBar"
import Footer from "../components/footer";
import styles from "./app.module.css";

// créer des divs pour forcer l'équart page/header ?

function MyApp({ Component, pageProps }) {
  return (
    <> 
        <Header />
        <CategoryBar />
          <main className={styles.pageContainer}>
            <Component {...pageProps} />
          </main>
        <Footer />
    </>
  );
}

export default MyApp;
