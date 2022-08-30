import GoogleAnalysics from "../components/GoogleAnalysics/GoogleV";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalysics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
