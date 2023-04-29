import { styled } from '@/styles'

export const NewYorkStyles = styled('div', {
  zIndex: 0,
  opacity: '0.70',
  position: 'absolute',
  bottom: '60px',
  left: '50%',
  transform: 'translateX(-90%)',

  '@media(max-width: 920px)': {
    left: '70%',
  },
  '@media(max-width: 720px)': {
    left: '78%',
    bottom: '120px',
    opacity: '0.85',
  },
  '@media(max-width: 580px)': {
    left: '84%',
  },
})

export const SydneyStyles = styled('div', {
  zIndex: 0,
  opacity: '0.70',
  position: 'absolute',
  bottom: '40px',
  left: '23%',
  transform: 'translateX(-90%)',

  '@media(max-width: 1320px)': {
    left: '25%',
  },

  '@media(max-width: 880px)': {
    left: '30%',
  },
  '@media(max-width: 720px)': {
    left: '43%',
    bottom: '100px',
    opacity: '0.85',
  },
})

export const FullWidth = styled('div', {
  display: 'flex',

  '@media(max-width: 720px)': {
    display: 'none',
  },
})

export const ScreenWidth720 = styled('div', {
  display: 'none',

  '@media(max-width: 720px)': {
    display: 'flex',
  },
})
