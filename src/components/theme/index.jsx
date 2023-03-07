import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#fff', '#2d3142')(props),
    },
  }),
};

const colors = {
  brand: {
    100: '#707a83',
  },
  brandbg: {
    100: '#EDEBFF',
  }
};

const fonts = {
  heading: `Josefin Sans, ${base.fonts.heading}`,
};

const components = {
  Button: {
    
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
