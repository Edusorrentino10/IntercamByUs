import { styled } from '@/styles'

export const LoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const LoginContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '450px',

  background: '$blue',
  border: '4px solid $yellow',
  borderRadius: '10px',

  marginTop: '130px',

  h1: {
    marginTop: '20px',
  },

  button: {
    padding: '9px',
    width: '75%',
    borderRadius: '10px',
    border: '3px solid $yellow',
    marginBottom: '80px',
    marginTop: '5px',
    background: '$blue',
    color: '$yellow',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      transition: '0.3s',
      background: '#113A6C',
    },
  },

  '@media (max-width: 440px)': {
    width: '100vw',
    borderRadius: '0px',
    border: 0,
    marginTop: '80px',
    background: '$blue',

    h1: {
      fontSize: '$mobileH1',
      marginTop: '60px',
      marginBottom: '10px',
    },

    button: {
      padding: '10px',
      border: '2px solid $yellow',
      fontSize: '$default',
    },
  },
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: '20px',

  input: {
    padding: '15px',
    margin: '10px 60px',
    width: '75%',
    borderRadius: '10px',
    border: 0,
  },

  'input[type=number]': {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },

  'input[type=submit]': {
    padding: '9px',
    background: '$yellow',
    color: '$blue',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: '3px solid $yellow',

    '&:hover': {
      transition: '0.3s',
      background: '#E3A729',
    },
  },

  '@media (max-width: 440px)': {
    input: {
      padding: '12px',
      margin: '10px 60px',
      width: '75%',
      borderRadius: '10px',
      border: 0,
    },

    'input[type=submit]': {
      padding: '10px',
      fontSize: '$default',
      fontWeight: 'bold',
      cursor: 'pointer',
      border: '1px solid $yellow',
    },
  },
})

export const ErrorMessage = styled('div', {
  fontSize: '0.7rem',
  display: 'flex',
  justifyContent: 'space-between',
  width: '74%',
})

export const ImageBox = styled('div', {
  marginTop: '30px',
  display: 'flex',

  '@media (max-width:440px)': {
    display: 'none',
  },
})
