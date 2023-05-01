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
    '&:(:not)(disabled)': {
      '&:hover': {
        transition: '0.3s',
        opacity: '0.96',
      },
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  '@media (max-width: 780px)': {
    width: '280px',
    gap: '15px',
    marginTop: '20px',

    input: {
      fontSize: '0.75rem',
    },

    label: {
      fontSize: '0.8rem',
    },

    textarea: {
      fontSize: '0.75rem',
    },
  },
})

export const ServicesContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  gap: '120px',

  '@media (max-width: 1095px)': {
    gap: '80px',
  },

  '@media (max-width: 980px)': {
    gap: '40px',
  },

  '@media (max-width: 895px)': {
    gap: '25px',
  },

  '@media (max-width: 780px)': {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    gap: '50px',
  },
})

export const VerticalLine = styled('div', {
  border: '1px solid $gray100',
  minHeight: '100%',
  opacity: '0.5',

  '@media (max-width: 780px)': {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    gap: '0px',
    minWidth: '280px',
    minHeight: '0',
  },
})

export const WhatsappBox = styled('div', {
  minHeight: '100%',
  width: '380px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',
  transition: '0.3s',

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

  '@media (max-width: 980px)': {
    width: '300px',

    h3: {
      fontSize: '1rem',
    },
  },

  '@media (max-width: 895px)': {
    width: '360px',

    h3: {
      fontSize: '0.9rem',
    },
  },

  '@media (max-width: 780px)': {
    width: '280px',
    minHeight: '0',
    gap: '25px',

    'input[type=submit]': {
      marginBottom: '20px',
    },
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

  '@media (max-width: 980px)': {
    gap: '10px',

    h2: {
      padding: '25px 0px',
      fontSize: '1.3rem',
    },
  },

  '@media (max-width: 895px)': {
    h2: {
      fontSize: '1.1rem',
    },
  },

  '@media (max-width: 780px)': {
    gap: '0px',
    h4: {
      padding: '20px 0px',
      fontSize: '0.8rem',
    },
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

  '@media (max-width: 980px)': {
    h4: {
      padding: '25px 0px',
      fontSize: '0.875rem',
    },
  },

  '@media (max-width: 780px)': {
    width: '90%',
    h4: {
      padding: '15px 0px',
      fontSize: '0.8rem',
    },
  },
})

export const SpanBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  padding: '20px',

  '@media (max-width: 980px)': {
    fontSize: '0.75rem',
    gap: '10px',
  },

  '@media (max-width: 780px)': {
    fontSize: '0.73rem',
    gap: '7px',
  },
})
