import { Provider } from "react-redux";
import GoogleAnalysics from "../components/GoogleAnalysics/GoogleV";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import Header from "../components/Header/Header";
import ProfileHeader from "../components/MyProfile/ProfileHeader";
import store from "../redux/store";
import MetaHead from "../components/MetaHead/Meta";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <ProfileHeader />
        <GoogleAnalysics />
        <div style={{ marginLeft: "120px", marginTop: "10px" }}>
          <Component {...pageProps} />
        </div>
        <MetaHead />
      </Provider>
    </>
  );
}

export default MyApp;
