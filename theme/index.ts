import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import breakpoints from "./breakpoints";

const styles = extendTheme({
  colors: {
    ...foundations.colors,
  }
});

export const theme = {
  ...styles,
  breakpoints,
  styles: {
    global: {
      '*, *:after, *:before': {
        boxsizing: 'inherit'
      },

      html: {
        boxSizing: 'border-box',
        fontSize: '62.5%',
        fontFamily: "'Open Sans', sans-serif"
      },

      body: {
        boxSizing: 'border-box',
        overflowX: 'hidden',
        fontWeight: 500,
      },
    }
  }
};
export type Theme = typeof theme;

export default theme;
