import type { AppProps } from "next/app";
import { MySwrConfig } from "../components/MySwrConfig";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MySwrConfig>
      <Component {...pageProps} />;
    </MySwrConfig>
  );
}

export default MyApp;
