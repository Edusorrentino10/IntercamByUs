import { styled } from '@/styles'

export const BannerContainer = styled('div', {
  height: '600px',
  backgroundColor: '$blue',
  position: 'absolute',
  top: '100px',
  width: '100%',
  display: 'flex',
  zIndex: 1,

  variants: {
    changeBanner: {
      true: {
        transition: '2s ease-out',
        right: '0%',
      },
      false: {
        transition: '2s ease-out',
        right: '100%',
      },
    },
  },
  defaultVariants: {
    changeBanner: true,
  },
})

export const BannerContent = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 200px) / 2)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '100px',
  margin: 'auto',

  '@media(max-width: 1030px)': {
    gap: '30px',
  },

  '@media(max-width: 720px)': {
    flexDirection: 'column',
    gap: '30px',
    justifyContent: 'center',
    marginBottom: '300px',
  },
})

export const Hero = styled('main', {
  zIndex: 1,
  maxWidth: '375px',
  marginBottom: '80px',

  h1: {
    fontSize: '2.6rem',
    textShadow: '4px 4px $colors$gray800',
    textAlign: 'left',
  },

  p: {
    fontSize: '$md',
    marginTop: '35px',
    width: '95%',
  },

  '@media (max-width:1132px)': {
    maxWidth: '1000px',
    minWidth: '300px',
    h1: {
      fontSize: '2.23rem',
      textAlign: 'left',
    },

    p: {
      fontSize: '$default',
      marginTop: '25px',
      width: '100%',
      marginLeft: '0px',
    },
  },

  '@media (max-width:720px)': {
    marginBottom: '0px',
    h1: {
      fontSize: '2rem',
    },

    p: {
      fontSize: '$default',
      marginTop: '20px',
    },
  },
})

export const CarouselItems = styled('div', {
  height: '40px',
  width: '100vw',
  position: 'absolute',
  bottom: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ItemsContent = styled('div', {
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  padding: '5px 8px',
  borderRadius: '5px',
})

export const CircleItem = styled('div', {
  width: '12px',
  height: '12px',
  backgroundColor: '$gray100',
  borderRadius: '50%',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$yellowHover',
  },
  '&:first-child': {
    backgroundColor: '$yellow',
  },
})
