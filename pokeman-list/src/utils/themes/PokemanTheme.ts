
export interface PokemanTheme {
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    keys: ['xs', 'sm', 'md', 'lg', 'xl'];
  };
  palette: {
    action: {
      disabledText: string;
      disabledBackground: string;
    };
    background: {
      default: string;
      level1: string;
      level2: string;
      paper: string;
    };
    common: {
      white: string;
      black: string;
    };
    default: {
      main: string;
      dark: string;
      contrastText: string;
    };
    divider: string;
    error: {
      main: string;
      dark: string;
      contrastText: string;
    };
    grey: {
      light: string;
      main: string;
      dark: string;
    };
    primary: {
      main: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      contrastText: string;
    };
    success: {
      main: string;
    };
    text: {
      primary: string;
      primaryHover: string;
      secondary: string;
      secondaryHover: string;
    };
  };
  spacing: (value: number) => string;
  typography: {
    spacing: {
      default: number;
    };
    weight: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };
    size: {
      sm: string;
      md: string;
      lg: string;
    };
    h1: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    h2: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    h3: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    body: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
    };
    caption: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      letterSpacing: number;
      lineHeight: number;
    };
  };
  zIndex: {
    dialog: number;
  };
}

export const pokemanTheme: PokemanTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 960,
      md: 1260,
      lg: 1320,
      xl: 1920
    },
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  palette: {
    action: {
      disabledText: '#c3c3c3',
      disabledBackground: '#505050'
    },
    background: {
      default: '#dd4814',
      level1: '#303030',
      level2: '#ccc',
      paper: '#252525'
    },
    common: {
      white: '#fff',
      black: '#000'
    },
    default: {
      main: '#505050',
      dark: '#474747',
      contrastText: '#fff'
    },
    divider: '#9e9e9e',
    error: {
      main: '#f5a623',
      dark: 'd38d1d',
      contrastText: '#fff'
    },
    grey: {
      light: '#9b9b9b',
      main: '#505050',
      dark: '#303030'
    },
    primary: {
      main: '#e32826',
      dark: '#bd2725',
      contrastText: '#fff'
    },
    secondary: {
      main: '#efefef',
      contrastText: '#000'
    },
    success: {
      main: '#b3ce42'
    },
    text: {
      primary: '#fff',
      primaryHover: '#fff',
      secondary: '#9B9B9B',
      secondaryHover: '#fff'
    }
  },
  spacing: (value: number) => `${value * 4}px`,
  typography: {
    spacing: {
      default: 0.7
    },
    weight: {
      light: 100,
      regular: 200,
      medium: 300,
      bold: 400
    },
    size: {
      sm: '12px',
      md: '14px',
      lg: '16px'
    },
    h1: {
      fontFamily: `${'Neo Sans'}, sans-serif`,
      fontSize: '28px',
      lineHeight: 1.5,
      fontWeight: 200
    },
    h2: {
      fontFamily: `${'Neo Sans'}, sans-serif`,
      fontSize: '18px',
      lineHeight: 1.5,
      fontWeight: 200
    },
    h3: {
      fontFamily: `${'Neo Sans'}, sans-serif`,
      fontSize: '16px',
      fontWeight: 200,
      lineHeight: 1.5
    },
    body: {
      fontFamily: `${'Neo Sans'}, sans-serif`,
      fontSize: '14px',
      fontWeight: 200,
      lineHeight: 1.5,
      letterSpacing: 0.7
    },
    caption: {
      fontFamily: `${'Neo Sans'}, sans-serif`,
      fontSize: '12px',
      fontWeight: 200,
      lineHeight: 1.5,
      letterSpacing: 0.7
    }
  },
  zIndex: {
    dialog: 1300
  }
};

export default pokemanTheme;
