import { styled } from '@/styles'

export const ContatoContainer = styled('div', {
  width: '100%',
})

export const Content = styled('div', {
  maxWidth: 'calc(100vw - 30%)',
  margin: 'auto',
  marginTop: '150px',
  marginBottom: '130px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  color: '$gray800',

  h1: {
    paddingBottom: '20px',
  },

  p: {
    fontSize: '$default',
    marginBottom: '50px',
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
  position: 'relative',

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
    border: '1px solid #253A44',
  },

  'input[type=number]': {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },

  'input[type=submit]': {
    backgroundColor: '$blue',
    color: '$gray100',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$default',
    '&:hover': {
      transition: '0.3s',
      opacity: '0.96',
    },
  },
})

export const ServicesContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  gap: '120px',
})

export const VerticalLine = styled('div', {
  border: '1px solid $gray100',
  minHeight: '100%',
  opacity: '0.5',
})

export const WhatsappBox = styled('div', {
  minHeight: '100%',
  width: '380px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',

  'input[type=submit]': {
    backgroundColor: '#25d366',
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$default',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #25d366',
    '&:hover': {
      transition: '0.3s',
      opacity: '0.96',
    },
  },

  h3: {
    color: '$blue',
    textAlign: 'center',
  },
})

export const WhatsappContent = styled('div', {
  border: '1px solid $gray800',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',

  h2: {
    padding: '34px 0px',
  },

  h3: {
    padding: '0px 0px 27px',
  },
})

export const SchedulesBox = styled('div', {
  background: '#EFEFEF',
  borderRadius: '4px',
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0px',
  marginBottom: '20px',

  h4: {
    color: '$gray800',
    padding: '20px 0px',
  },
})

export const SpanBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  padding: '20px',
})
