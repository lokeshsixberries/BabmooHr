import Head from "../components/Head/Head";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
