import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { Nunito_Sans, Poppins } from "next/font/google";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { wrapper, persistor } from "@/store/index";
import Preloader from "@/components/preloader";
import { AppProps } from 'next/app';
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'node_modules/react-modal-video/scss/modal-video.scss';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "@/assets/sass/style.scss";
import "@/assets/responsive.css";
import { PersistGate } from "redux-persist/integration/react";
import Router from "next/router";
import { LoadingPage } from "@/components/Loading";

const nunito = Nunito_Sans({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const Poppin = Poppins({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>تمليك شركة محمدالاصيفر</title>
        <meta name="description" content="فلل تمليك الطائف شركة محمد الاصيفر " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <style jsx global>{`
        html,body {
          font-family: ${nunito.style.fontFamily};
        }

        h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
         
          font-family: ${Poppin.style.fontFamily};
      }


      `}</style>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Preloader />}>

          {loading ? (
            <LoadingPage />
          ) : (
            <Component {...props.pageProps} />
          )}

        </PersistGate>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
