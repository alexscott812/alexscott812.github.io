import type { Theme } from 'theme-ui'

const theme: Theme = {
  config: {
    initialColorModeName: 'light',
  },
  // breakpoints: [32, 48, 64, 96, 128].map(w => `${w}em`),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#141414',
    background: 'white',
    primary: '#0da35e',
    secondary: '#f3f3f4',
    modes: {
      dark: {
        text: 'white',
        background: '#141414',
        primary: '#39e395',
        secondary: '#242424',
      }
    }
  },
  // sizes: {
  //   container: 768,
  // },
  radii: {
    small: 3,
    medium: 6,
    large: 9,
    extraLarge: 18,
    full: 99999,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      borderRadius: 'full',
      px: '1rem',
      py: '0.5rem'
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
      borderRadius: 'full',
      px: '1rem',
      py: '0.5rem'
    },
    emoji: {
      color: 'background',
      bg: 'secondary',
      borderRadius: 'full',
      width: '2.5rem',
      height: '2.5rem',
      p: 0
    }
  },
  cards: {
    primary: {
      padding: 3,
      borderRadius: 'extraLarge',
      border: '2px solid',
      borderColor: 'secondary',
      width: '100%',
    },
    sunken: {
      padding: 3,
      borderRadius: 'extraLarge',
      border: '2px solid',
      bg: 'secondary',
      borderColor: 'secondary',
      width: '100%',
    }
  },
  layout: {
    container: {
      maxWidth: 768,
      width: '100%',
      mx: 'auto',
      px: 3,
    }
  }
};



export default theme;