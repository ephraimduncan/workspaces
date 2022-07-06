import { ThemeProvider } from "degen";
import { SessionProvider } from "next-auth/react";
import "degen/styles";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/ia-writer-mono/400.css";
import "@fontsource/ia-writer-mono/700.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
