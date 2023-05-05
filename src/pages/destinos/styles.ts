import { styled } from '@/styles'

export const DestinosContainer = styled('div', {
  width: '100%',
})

export const Content = styled('div', {
  maxWidth: 'calc(100vw - 30%)',
  margin: 'auto',
  marginTop: '150px',
  marginBottom: '130px',
  display: 'flex',
  flexDirection: 'column',
  transition: '0.3s',
  gap: '20px',
  color: '$gray800',

  h1: {
    paddingBottom: '20px',
  },

  p: {
    fontSize: '$default',
    marginBottom: '50px',
  },

  '@media (max-width:780px)': {
    maxWidth: 'calc(100vw - 20%)',
    p: {
      fontSize: '0.875rem',
    },

    h1: {
      fontSize: '$mobileH1',
    },
  },
})

export const DestinationsContainer = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(3, 1fr)',
  margin: 'auto',
  gap: '100px',
  h3: {
    marginTop: '20px',
    color: '$gray100',
    textAlign: 'center',
  },
  p: {
    padding: '20px',
    marginTop: '20px',
    color: '$gray100',
    textAlign: 'center',
    fontSize: '0.875rem',
  },

  '@media (max-width:1400px)': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@media (max-width:1020px)': {
    gap: '50px',
  },

  '@media (max-width:920px)': {
    gap: '60px',
    gridTemplateColumns: '1fr',
  },
})

export const EuaContainer = styled('div', {
  width: '320px',
  height: '460px',
  position: 'relative',
  background: '$blue',
  borderRadius: '6px',
  boxShadow: '4px 6px 4px rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
  transition: '0.3s',

  '@media (max-width:1500px)': {
    width: '300px',
  },

  '@media (max-width:1400px)': {
    width: '320px',
  },

  '@media (max-width: 420px)': {
    width: '300px',
  },

  '@media (max-width: 360px)': {
    width: '280px',
  },

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.02)',
  },
})

export const AustraliaContainer = styled('div', {
  width: '320px',
  height: '460px',
  position: 'relative',
  background: '$blue',
  borderRadius: '6px',
  boxShadow: '4px 6px 4px rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
  transition: '0.3s',

  '@media (max-width:1500px)': {
    width: '300px',
  },

  '@media (max-width:1400px)': {
    width: '320px',
  },

  '@media (max-width: 420px)': {
    width: '300px',
  },

  '@media (max-width: 360px)': {
    width: '280px',
  },

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.02)',
  },
})

export const CanadaContainer = styled('div', {
  width: '320px',
  height: '460px',
  position: 'relative',
  background: '$blue',
  borderRadius: '6px',
  boxShadow: '4px 6px 4px rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
  transition: '0.3s',

  '@media (max-width:1500px)': {
    width: '300px',
  },

  '@media (max-width:1400px)': {
    width: '320px',
  },

  '@media (max-width: 420px)': {
    width: '300px',
  },

  '@media (max-width: 360px)': {
    width: '280px',
  },

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.02)',
  },
})

export const IrlandaContainer = styled('div', {
  width: '320px',
  height: '460px',
  position: 'relative',
  background: '$blue',
  borderRadius: '6px',
  boxShadow: '4px 6px 4px rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
  transition: '0.3s',

  '@media (max-width:1500px)': {
    width: '300px',
  },

  '@media (max-width:1400px)': {
    width: '320px',
  },

  '@media (max-width: 420px)': {
    width: '300px',
  },

  '@media (max-width: 360px)': {
    width: '280px',
  },

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.02)',
  },
})

export const InglaterraContainer = styled('div', {
  width: '320px',
  height: '460px',
  position: 'relative',
  background: '$blue',
  borderRadius: '6px',
  boxShadow: '4px 6px 4px rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
  transition: '0.3s',

  '@media (max-width:1500px)': {
    width: '300px',
  },

  '@media (max-width:1400px)': {
    width: '320px',
  },

  '@media (max-width: 420px)': {
    width: '300px',
  },

  '@media (max-width: 360px)': {
    width: '280px',
  },

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.02)',
  },
})

export const EspanhaContainer = styled('div', {
  width: '320px',
  height: '460px',
  position: 'relative',
  background: '$blue',
  borderRadius: '6px',
  boxShadow: '4px 6px 4px rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
  transition: '0.3s',

  '@media (max-width:1500px)': {
    width: '300px',
  },

  '@media (max-width:1400px)': {
    width: '320px',
  },

  '@media (max-width: 420px)': {
    width: '300px',
  },

  '@media (max-width: 360px)': {
    width: '280px',
  },

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.02)',
  },
})

export const VerMaisBox = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1px',
  bottom: '15px',
  right: '15px',
  color: '$gray100',
  border: '1px solid $gray100',
})
