import { styled } from '@/styles'

export const SobreNosContainer = styled('div', {
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
    fontSize: '0.875rem',
    maxWidth: 'calc(100vw - 20%)',
    p: {
      fontSize: '0.875rem',
    },

    h1: {
      fontSize: '$mobileH1',
    },
  },
})

export const TopicsTitle = styled('div', {
  color: '$gray800',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  '&:nth-child(2n)': {
    '&:before': {
      content: '',
      width: '13px',
      height: '29px',
      backgroundColor: '$yellow',
      display: 'inline-block',
      borderRadius: '2px',
    },
  },
  '&:nth-child(2n - 1)': {
    '&:before': {
      content: '',
      width: '13px',
      height: '29px',
      backgroundColor: '$blue',
      display: 'inline-block',
      borderRadius: '2px',
    },
  },

  '@media (max-width:420px)': {
    '&:nth-child(2n)': {
      '&:before': {
        content: '',
        width: '22px',
        height: '29px',
        backgroundColor: '$yellow',
        display: 'inline-block',
        borderRadius: '2px',
      },
    },
    '&:nth-child(3)': {
      '&:before': {
        content: '',
        width: '26px',
        height: '29px',
        backgroundColor: '$blue',
        display: 'inline-block',
        borderRadius: '2px',
      },
    },
  },
})
