import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import theme from "@/theme";
import { PageTitle } from "@/utils";
import { AppContextProvider } from "@/contexts";

export default function App({ Component, pageProps }: AppProps) {
  const title = PageTitle(Component);

  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo title={`${title} | Hivedeck`} />
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  );
}
