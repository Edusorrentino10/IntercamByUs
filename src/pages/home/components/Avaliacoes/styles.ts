import { styled } from '@/styles'

export const AvaliacoesContainer = styled('div', {
  position: 'relative',
  padding: '100px 0px 100px 0px',
  backgroundColor: '#fbfbfb',
  display: 'flex',
  justifyContent: 'center',

  '@media (max-width:1140px)': {
    padding: '100px 0px 220px 0px',
  },

  '@media (max-width:760px)': {
    padding: '100px 0px 450px 0px',
  },
})

export const AvaliacoesContent = styled('div', {
  margin: 'auto',
  width: '80%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '110px',
})

export const Title = styled('div', {
  color: '$gray800',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  '&:before': {
    content: '',
    width: '13px',
    height: '29px',
    backgroundColor: '$blue',
    display: 'inline-block',
    borderRadius: '2px',
  },
})

export const ContentBlocks = styled('div', {
  display: 'flex',
  gap: '5%',

  '@media (max-width:1255px)': {
    gap: '2%',
  },

  '@media (max-width:1140px)': {
    gap: '15%',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
  },

  '@media (max-width:760px)': {
    gridTemplateColumns: '1fr',
    gap: '10%',
    margin: 'auto',
  },
})

export const BlockDiv = styled('div', {
  height: '375px',
  width: '293px',
  backgroundColor: '#fbfbfb',
  border: '2px solid $blue',
  borderRadius: '8px',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  justifyContent: 'space-between',

  padding: '70px 35px 55px 35px',

  p: {
    color: '$gray800',
    fontSize: '$default',
  },

  h1: {
    color: '$gray800',
    fontSize: '$md',
    fontWeight: 'bold',
    marginTop: '10px',
  },

  '@media (max-width:1585px)': {
    p: {
      fontSize: '0.875rem',
    },
    h1: {
      fontSize: '$default',
    },
  },

  '@media (max-width:1140px)': {
    width: '320px',
  },

  '@media (max-width:930px)': {
    width: '300px',
  },

  '@media (max-width:880px)': {
    width: '260px',
  },

  '@media (max-width:760px)': {
    width: '78vw',
    height: 'auto',
  },
})

export const Quotes = styled('div', {
  height: '80px',
  width: '70px',
  border: '2px solid $blue',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  top: '-40px',
  right: '50%',
  transform: 'translateX(50%)',

  position: 'absolute',
  backgroundColor: '#fbfbfb',
})
