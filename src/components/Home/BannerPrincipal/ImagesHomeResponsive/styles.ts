import { styled } from '@/styles'

export const FullWidth = styled('div', {
  display: 'flex',
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

  '@media(max-width: 880px)': {
    display: 'flex',
  },

  '@media(max-width: 750px)': {
    display: 'none',
  },
})
