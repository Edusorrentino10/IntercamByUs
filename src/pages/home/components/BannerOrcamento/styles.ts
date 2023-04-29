import { styled } from '@/styles'

export const BannerContainer = styled('div', {
  height: '600px',
  backgroundColor: '$blue',
  position: 'absolute',
  top: '100px',
  width: '100%',
  zIndex: 1,

  variants: {
    changeBanner: {
      true: {
        transition: '2s ease-out',
        left: '100%',
        button: {
          transition: '2.5s',
        },
      },
      false: {
        transition: '2s ease-out',
        left: '0%',
      },
    },
  },
  defaultVariants: {
    changeBanner: false,
  },
})

export const BannerContent = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 200px) / 2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '100px',
  margin: 'auto',

  '@media(max-width: 1030px)': {
    gap: '40px',
    height: '100%',
  },

  '@media(max-width: 610px)': {
    flexDirection: 'column-reverse',
    gap: '0px',
  },
})

export const Hero = styled('main', {
  maxWidth: '375px',

  h1: {
    fontSize: '2.625rem',
    textShadow: '4px 4px $colors$gray800',
  },

  p: {
    fontSize: '$lg',
    marginTop: '15px',
  },

  button: {
    backgroundColor: '$yellow',
    color: '#212124',
    borderRadius: '8px',
    border: 0,
    fontSize: '$lg',
    padding: '15px',
    marginTop: '40px',
  },

  '@media (max-width:1132px)': {
    minWidth: '300px',
    h1: {
      fontSize: '2.23rem',
    },

    p: {
      fontSize: '$default',
      marginTop: '20px',
      width: '100%',
    },

    button: {
      fontSize: '$md',
      padding: '12px',
    },
  },

  '@media (max-width:920px)': {
    marginBottom: '0px',
    padding: '20px',
    h1: {
      fontSize: '2rem',
    },
    p: {
      fontSize: '$default',
      marginTop: '20px',
    },
  },

  '@media (max-width:800px)': {
    paddingLeft: '30px',
    h1: {
      fontSize: '1.875rem',
    },
    p: {
      fontSize: '$default',
      marginTop: '20px',
    },
  },

  '@media (max-width:720px)': {
    padding: '50px',
  },

  '@media (max-width:610px)': {
    paddingTop: '20px',
    maxWidth: '100vw',
    width: '89vw',
    textAlign: 'center',
    h1: {
      fontSize: '1.875rem',
    },
    p: {
      fontSize: '$default',
      marginTop: '20px',
    },
  },
})

export const CarouselItems = styled('div', {
  zIndex: 100,
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
  backgroundColor: '$yellow',
  borderRadius: '50%',
  cursor: 'pointer',

  '&:first-child': {
    backgroundColor: '$gray100',
    '&:hover': {
      backgroundColor: '$yellowHover',
    },
  },
})
