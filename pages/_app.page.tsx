import type { AppProps } from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import {theme} from "dh-marvel/styles/material-theme";
import { useRouter } from 'next/router';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Verificar si la ruta actual es la página de checkout
  const LayoutComponent = router.pathname.includes('/checkout');
  const LayoutComponentCompra = router.pathname.includes('/confirmacion-compra');

 /* LayoutComponent = (Component as any).Layout;*/


  return <ThemeProvider theme={theme}>
    <CssBaseline />
     {(LayoutComponent || LayoutComponentCompra)?
      <LayoutCheckout>
        <Component {...pageProps} />
      </LayoutCheckout>
      :
      <LayoutGeneral>
        <Component {...pageProps} />
      </LayoutGeneral>
    } 
    {/* <LayoutGeneral>
      <Component {...pageProps} />
    </LayoutGeneral> */}
    <style jsx global>{`
              /* Other global styles such as 'html, body' etc... */

              #__next {
                height: 100%;
              }
            `}</style>
  </ThemeProvider>
}

export default MyApp
