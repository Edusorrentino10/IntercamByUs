import { styled } from '@/styles'

export const OrcamentoContainer = styled('div', {
  width: '100%',
  marginBottom: '110px',
})

export const TitleArea = styled('div', {
  maxWidth: 'calc(100vw - 30%)',
  margin: 'auto',
  marginTop: '150px',

  p: {
    marginTop: '30px',
    color: '$gray800',
    fontSize: '$default',
  },

  '@media (max-width: 560px)': {
    marginTop: '140px',
    h1: {
      fontSize: '$mobileH1',
    },

    p: {
      marginTop: '15px',
      color: '$gray800',
      fontSize: '$default',
    },
  },
})

export const BoxAreaContent = styled('div', {
  maxWidth: 'calc(100vw - 30%)',
  margin: 'auto',
  marginTop: '60px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '100px',
  color: '$gray800',
  p: {
    fontSize: '$md',
  },
})

export const Box = styled('div', {
  height: '420px',
  width: '320px',
  background: '$gray100',
  boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '6px',
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 300ms ease-in-out',

  '&:hover': {
    transform: 'scale(1.02)',
  },
})

export const ImageBox = styled('div', {
  height: '130px',
  width: '100%',
  background: 'blue',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '6px 6px 0px 0px',
})

export const InfosArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  padding: '18px 15px 0px 15px',

  span: {
    fontSize: '0.875rem',
  },
})

export const SchoolName = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const FlexAlignItemsArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const PriceContent = styled('div', {
  position: 'absolute',
  bottom: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '30px',
  border: '1px solid #E0E0E0',

  p: {
    color: '#F3B229',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },

  span: {
    color: '#253a44',
    fontWeight: '400',
    fontSize: '0.875rem',
  },
})
