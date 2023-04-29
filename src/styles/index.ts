import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      blue: '#103F79',

      gray100: '#EFEFEF',
      gray800: '#253A44',

      yellow: '#F3B229',
      yellowHover: '#FFD47A',
    },

    fontSizes: {
      default: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      mobileH1: '1.75rem',
      '2xl': '2rem',
    },
  },
})
