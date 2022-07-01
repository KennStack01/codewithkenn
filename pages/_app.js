import "../styles/globals.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import Seo from "../components/SEO.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
