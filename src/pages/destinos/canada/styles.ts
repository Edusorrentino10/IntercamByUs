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

  span: {
    fontSize: '$default',
  },

  '@media (max-width:780px)': {
    marginBottom: '70px',
    maxWidth: 'calc(100vw - 20%)',
    p: {
      fontSize: '0.875rem',
    },

    span: {
      fontSize: '0.875rem',
    },

    h1: {
      fontSize: '$mobileH1',
    },
  },
})

export const ImagesCitiesContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '100%',
  marginTop: '50px',

  span: {
    display: 'block',
    marginBottom: '15px',
  },

  p: {
    display: 'block',
    marginBottom: '10px',
  },

  '@media (max-width: 1470px)': {
    flexDirection: 'column',
    p: {
      marginBottom: '50px',
    },
  },

  '@media (max-width: 780px)': {
    width: 'calc(100vw - 20%)',
    overflow: 'hidden',
    span: {
      width: '80vw',
    },

    p: {
      width: '80vw',
    },
  },
})

export const TorontoContent = styled('div', {
  width: '520px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const VancouverContent = styled('div', {
  width: '520px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
