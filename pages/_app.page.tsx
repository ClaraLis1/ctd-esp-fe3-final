import type { AppProps } from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import {theme} from "dh-marvel/styles/material-theme";

function MyApp({ Component, pageProps }: AppProps) {
 /* LayoutComponent = (Component as any).Layout;

{LayoutComponent ?
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
      :
      <LayoutGeneral>
        <Component {...pageProps} />
      </LayoutGeneral>
    }*/
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <LayoutGeneral>
      <Component {...pageProps} />
    </LayoutGeneral>
    <style jsx global>{`
              /* Other global styles such as 'html, body' etc... */

              #__next {
                height: 100%;
              }
            `}</style>
  </ThemeProvider>
}

export default MyApp
