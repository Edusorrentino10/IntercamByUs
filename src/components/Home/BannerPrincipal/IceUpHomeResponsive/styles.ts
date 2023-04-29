import { styled } from '@/styles'

export const IceUpFullWidth = styled('div', {
  zIndex: 0,
  position: 'absolute',
  opacity: '0.85',

  '@media(max-width: 1030px)': {
    display: 'none',
  },
})

export const IceUpScreenWidth1030 = styled('div', {
  zIndex: 0,
  position: 'absolute',
  opacity: '0.85',

  display: 'none',

  '@media(max-width: 1030px)': {
    display: 'flex',
  },

  '@media(max-width: 880px)': {
    display: 'none',
  },
})

export const IceUpScreenWidth880 = styled('div', {
  zIndex: 0,
  position: 'absolute',
  opacity: '0.85',

  display: 'none',

  '@media(max-width: 880px)': {
    display: 'flex',
  },

  '@media(max-width: 720px)': {
    display: 'flex',
  },
})
