import React, { useEffect } from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import Router from "next/router";
import withDarkMode from "next-dark-mode";
import { GoogleAnalytics } from "nextjs-google-analytics";
import NProgress from "nprogress"; //nprogress module

import { CustomSnackbarProvider } from "@src/context/CustomSnackbarProvider";
import { ColorModeProvider } from "@src/context/CustomThemeContext";
import { isProd } from "@src/utils/constants";
import createEmotionCache from "@src/utils/createEmotionCache";

import "nprogress/nprogress.css"; //styles of nprogress
import "../styles/index.css";

interface Props extends AppProps {
  emotionCache?: EmotionCache;
}

NProgress.configure({
  minimum: 0.2
});

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App: React.FunctionComponent<Props> = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {
  //usePageViews();
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeProvider>
        <CustomSnackbarProvider>
          {isProd && <GoogleAnalytics />}
          <Component {...pageProps} />
        </CustomSnackbarProvider>
      </ColorModeProvider>
    </CacheProvider>
  );
};

export default withDarkMode(App);
