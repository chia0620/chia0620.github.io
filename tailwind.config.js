module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      background: {
        dark: '#181a1f',
        light: '#ffffff'
      },
      text: {
        dark: '#ffffff',
        light: '#2b2b2b'
      },
      primary: {
        dark: '#f5e53d',
        light: '#927b68'
      },
      secondary: {
        dark: '#33ced8',
        light: '#c69fbf'
      },
      gray: {
        dark: {
          300: '#1d252c'
        },
        light: {
          300: '#f8f8f8',
          600: '#ecebea'
        }
      },
      dark: {
        DEFAULT: '#2b2b2b'
      },
      light: {
        DEFAULT: '#ffffff'
      }
    },
    spacing: {
      0: '0px',
      0.25: '0.125rem',
      0.5: '0.25rem',
      1: '0.5rem',
      1.5: '0.75rem',
      2: '1rem',
      2.5: '1.25rem',
      3: '1.5rem',
      3.5: '1.75rem',
      4: '2rem',
      4.5: '2.25rem',
      5: '2.5rem',
      5.5: '2.75rem',
      6: '3rem',
      6.5: '3.25rem',
      7: '3.5rem',
      7.5: '3.75rem',
      8: '4rem',
      10: '5rem',
      18: '9rem'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      lg: '1.625',
      xl: '1.75',
      '2xl': '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem'
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.5rem', { lineHeight: '2rem' }],
      '2xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '4xl': ['3rem', { lineHeight: '1' }],
      '5xl': ['4rem', { lineHeight: '1' }]
    },
    inset: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      full: '100%'
    }),
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT:
        'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, top, left, bottom, right',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform'
    },
    height: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      '1/5-screen': '20vh',
      '2/5-screen': '40vh',
      '3/5-screen': '60vh',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content'
    }),
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: []
}
