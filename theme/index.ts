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
        fontFamily: "'Open Sans', sans-serif"
      },

      body: {
        boxSizing: 'border-box',
        overflowX: 'hidden',
      },

      ".editor__wrapper": {
        h1: {
          fontSize: '3rem',
        },
        h2: {
          fontSize: '2.5rem',
        },
        h3: {
          fontSize: '2rem',
        },
        h4: {
          fontSize: '1.5rem',
        },
        h5: {
          fontSize: '1rem',
        },
        h6: {
          fontSize: '.8rem',
        },
      }
    }
  }
};
export type Theme = typeof theme;

export default theme;
