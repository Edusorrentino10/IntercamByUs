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

export const Table = styled('table', {
  width: '760px',
  border: '2px solid $yellow',
  borderCollapse: 'collapse',
  margin: 'auto',
  marginTop: '50px',
  marginBottom: '80px',

  caption: {
    border: '2px solid $yellow',
    borderBottom: '0px',
    borderRadius: '4px 4px 0px 0px',
    padding: '10px',
    fontSize: '$lg',
    color: '$yellow',
    fontWeight: 'bold',
  },

  tr: {
    strong: {
      color: '$yellow',
      fontSize: '$default',
    },
  },

  th: {
    color: '$gray800',
    fontWeight: '400',
    fontSize: '$default',
    border: '1px solid $yellow',
    padding: '15px',
  },

  '@media (max-width: 1080px)': {
    width: '680px',
  },

  '@media (max-width: 920px)': {
    width: '600px',
  },

  '@media (max-width: 760px)': {
    width: '520px',
    caption: {
      fontSize: '$md',
    },

    tr: {
      strong: {
        fontSize: '0.875rem',
      },
    },

    th: {
      fontSize: '0.875rem',
    },
  },

  '@media (max-width: 630px)': {
    maxWidth: 'calc(100vw - 25%)',
  },

  '@media (max-width: 440px)': {
    caption: {
      padding: '8px',
    },

    th: {
      padding: '12px',
    },
  },
})
