import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$fff',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 600,
    color: '$yellow',
  },

  button: {
    cursor: 'pointer',
    outlineColor: '$blue',
  },

  '[disabled]': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },

  li: {
    outlineColor: '$colors$yellow',
  },

  'input, textarea': {
    resize: 'none',
    outlineColor: '$blue',
  },
})
