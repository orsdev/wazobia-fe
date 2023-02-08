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
          fontSize: '2.5rem',
          fontWeight: 700
        },
        h2: {
          fontSize: '2rem',
        },
        h3: {
          fontSize: '1.7rem',
        },
        h4: {
          fontSize: '1.4rem',
        },
        h5: {
          fontSize: '1rem',
        },
        h6: {
          fontSize: '.8rem',
        },
      },

      ".editor__container": {

        a: {
          color: 'blue',
          cursor: 'pointer',

          _hover: {
            textDecoration: 'underline',
          }

        }
      }
    }
  }
};
export type Theme = typeof theme;

export default theme;
