import { styled } from '@/styles'

export const FullWidth = styled('div', {
  zIndex: 0,
  '@media(max-width: 1030px)': {
    display: 'none',
  },
})

export const ScreenWidth1030 = styled('div', {
  display: 'none',

  '@media(max-width: 1030px)': {
    display: 'flex',
  },

  '@media(max-width: 880px)': {
    display: 'none',
  },
})

export const ScreenWidth880 = styled('div', {
  display: 'none',
  paddingRight: '20px',

  '@media(max-width: 880px)': {
    display: 'flex',
  },

  '@media(max-width: 800px)': {
    display: 'none',
  },
})

export const ScreenWidth800 = styled('div', {
  display: 'none',
  paddingRight: '30px',

  '@media(max-width: 800px)': {
    display: 'flex',
  },

  '@media(max-width: 720px)': {
    display: 'none',
  },
})

export const ScreenWidth720 = styled('div', {
  display: 'none',
  paddingRight: '50px',

  '@media(max-width: 720px)': {
    display: 'flex',
  },

  '@media(max-width: 610px)': {
    display: 'none',
  },
})

export const ScreenWidth610 = styled('div', {
  display: 'none',
  paddingTop: '20px',

  '@media(max-width: 610px)': {
    display: 'flex',
  },
})
