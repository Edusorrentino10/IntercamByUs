import { styled } from '@/styles'

export const FooterContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$blue',
  overflowX: 'hidden',
})

export const Titles = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',

  '@media (max-width:650px)': {
    display: 'grid',
    width: '100%',
  },
})

export const SigaNos = styled('div', {
  width: '30%',
  borderBottom: '2px solid rgba(13, 72, 145, 0.7)',
  padding: '18px',
  position: 'relative',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '$gray100',

  '&:before': {
    content: '',
    width: '95px',
    borderBottom: '2px solid $yellow',
    position: 'absolute',
    bottom: '-2px',
    left: '0',

    '@media (max-width:650px)': {
      width: '70px',
    },
  },

  '@media (max-width:650px)': {
    width: '61vw',
  },
})

export const Produtos = styled('div', {
  width: '30%',
  borderBottom: '2px solid rgba(13, 72, 145, 0.7)',
  padding: '18px',
  position: 'relative',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '$gray100',

  '&:before': {
    content: '',
    width: '95px',
    borderBottom: '2px solid $yellow',
    position: 'absolute',
    bottom: '-2px',
    left: '0',

    '@media (max-width:650px)': {
      width: '70px',
    },
  },

  '@media (max-width:650px)': {
    width: '61vw',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '260px',
  },
})

export const Novidades = styled('div', {
  width: '30%',
  borderBottom: '2px solid rgba(13, 72, 145, 0.7)',
  padding: '18px',
  position: 'relative',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '$gray100',

  '&:before': {
    content: '',
    width: '95px',
    borderBottom: '2px solid $yellow',
    position: 'absolute',
    bottom: '-2px',
    left: '0',

    '@media (max-width:650px)': {
      width: '70px',
    },
  },

  '@media (max-width:650px)': {
    width: '61vw',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '610px',
  },
})

export const SigaNosContent = styled('div', {
  width: '390px',
  position: 'relative',
  textAlign: 'center',
  color: '$gray100',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',

  '@media (max-width:760px)': {
    p: {
      fontSize: '0.875rem',
      padding: '5px',
    },
  },

  '@media (max-width:650px)': {
    maxWidth: '90vw',

    p: {
      marginBottom: '125px',
      textAlign: 'center',
      width: '99vw',
    },
  },

  '@media (max-width:460px)': {
    p: {
      paddingLeft: '50px',
      paddingRight: '50px',
      maxWidth: '99vw',
    },
  },
})

export const ProdutosContent = styled('div', {
  width: '390px',
  position: 'relative',
  textAlign: 'center',
  color: '$gray100',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  p: {
    padding: '15px',
    cursor: 'pointer',
    '&:hover': {
      color: '$yellow',
      transition: '0.2s',
    },
  },

  '@media (max-width:760px)': {
    p: {
      fontSize: '0.875rem',
    },
  },

  '@media (max-width:650px)': {
    marginBottom: '120px',
    width: '80vw',
  },
})

export const NovidadesContent = styled('div', {
  width: '390px',
  position: 'relative',
  color: '$gray100',
  display: 'flex',
  flexDirection: 'column',
  gap: '22px',

  label: {
    marginTop: '10px',
    marginBottom: '2px',
    fontSize: '0.875rem',
  },

  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '0',
  },

  '[type="submit"]': {
    background: '$yellow',
    fontWeight: 'bold',
    fontSize: '$default',
    marginTop: '22px',
    cursor: 'pointer',
    color: '$blue',
  },

  '@media (max-width:1130px)': {
    paddingRight: '10px',
  },

  '@media (max-width:760px)': {
    p: {
      fontSize: '0.875rem',
    },

    label: {
      '&:first-child': {
        marginTop: '5px',
      },
    },

    input: {
      padding: '10px',
    },

    '[type="submit"]': {
      background: '$yellow',
      fontWeight: 'bold',
      fontSize: '0.875rem',
      marginTop: '22px',
      cursor: 'pointer',
      color: '$blue',
    },
  },

  '@media (max-width:650px)': {
    marginTop: '10px',
    maxWidth: '90vw',
    input: {
      padding: '12px',
    },
  },

  '@media (max-width:460px)': {
    paddingLeft: '50px',
    paddingRight: '50px',
  },
})

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '30px',

  '@media (max-width:650px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const BoxMidia = styled('div', {
  cursor: 'pointer',
  backgroundColor: 'rgba(13, 72, 145, 0.7)',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',

  '&:hover': {
    backgroundColor: '$yellow',
    transition: '0.2s',
  },
})

export const CopyrightSection = styled('div', {
  padding: '10px',
  textAlign: 'center',
  marginTop: '35px',
  border: '1px solid rgba(13, 72, 145, 0.9)',
  fontSize: '0.875rem',

  '@media (max-width:760px)': {
    fontSize: '0.75rem',
  },
})

export const MidiaContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',

  '@media (max-width:650px)': {
    gap: '40px',
    marginBottom: '50px',
    width: '99vw',
  },
})
