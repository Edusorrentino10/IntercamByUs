import { styled } from '@/styles'

export const ContatoContainer = styled('div', {
  width: '100%',
})

export const Content = styled('div', {
  maxWidth: 'calc(100vw - 30%)',
  margin: 'auto',
  marginTop: '150px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  color: '$gray800',

  h1: {
    paddingBottom: '20px',
  },

  p: {
    fontSize: '$default',
  },

  '@media (max-width:760px)': {
    p: {
      fontSize: '$default',
    },

    h1: {
      fontSize: '$mobileH1',
    },
  },
})

export const Form = styled('form', {
  width: '350px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '50px',

  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #253A44',
  },

  label: {
    fontSize: '0.8rem',
    opacity: '0.8',
    marginBottom: '-15px',
  },

  textarea: {
    padding: '10px',
    borderRadius: '4px',
    height: '180px',
  },

  'input[type=number]': {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
})
