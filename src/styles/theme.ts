export const theme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  colors: {
    primary: '#546DD8',
    background: '#F6F6F6',
    black: '#232324',
    white: '#FFFFFF',
    neutral: {
      200: '#ABABAB',
      300: '#576061',
    },
  },
  font: {
    sizes: {
      small: '1.6rem',
      medium: '2rem',
      large: '2.4rem',
      xlarge: '3.2rem',
      huge: '5rem',
    },
    family: {
      logo: 'Itim, cursive',
      main: 'Open Sans, sans-serif',
    },
  },
  transition: {
    slow: '0.5s ease-in-out',
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
    ease: {
      slow: '0.5s ease',
      default: '0.25s ease',
      fast: '0.1s ease',
    },
  },
} as const
