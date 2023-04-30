import { styled } from '@/styles'

export const OrcamentoContainer = styled('header', {
  width: '100%',
  marginBottom: '390px',
})

export const OrcamentoContent = styled('div', {
  maxWidth: 'calc(100vw - 30%)',
  margin: 'auto',
  marginTop: '150px',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  color: '$gray800',

  p: {
    fontSize: '$default',
  },

  '@media (max-width:760px)': {
    maxWidth: 'calc(100vw - 20%)',
    p: {
      fontSize: '$default',
    },

    h1: {
      fontSize: '$mobileH1',
    },
  },
})

export const DivCountriesCities = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const CountriesContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '10%',
  rowGap: '70%',
  marginTop: '50px',

  select: {
    backgroundColor: '#f3b229',
    borderRadius: '6px',
    padding: '10px 15px',
    color: '#103f79',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    outline: 'none',
    border: 'none',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',

    '&:focus': {
      backgroundColor: '#f3b229',
      borderRadius: '6px 6px 0px 0px',
      border: '1px solid #103f79',
    },

    '@media (max-width:760px)': {
      padding: '7px 8px',
      fontSize: '14px',
    },

    '@media (max-width:600px)': {
      padding: '12px 10px',
      fontSize: '14px',
    },
  },

  option: {
    backgroundColor: '#103f79',
    color: '#f3b229',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#f3b229',
      color: '#103f79',
    },
  },

  '@media (max-width: 1700px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
  },

  '@media (max-width:600px)': {
    rowGap: '40%',
    gridTemplateColumns: '1fr 1fr',
    width: '100%',
    marginTop: '10px',
  },
})
