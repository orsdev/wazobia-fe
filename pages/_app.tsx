import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { Toaster } from "react-hot-toast";
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
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              fontSize: "16px",
            },

            success: {
              position: "top-center",
              duration: 10000,
              style: {
                padding: "10px 15px",
              },
            },
          }}
        />
      </AppContextProvider>
    </ChakraProvider>
  );
}
