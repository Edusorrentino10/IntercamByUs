import { styled } from '@/styles'

export const OpPersonalizadaContainer = styled('div', {
  marginTop: '620px',
  position: 'relative',
  padding: '100px 0px 150px 0px',

  '@media (max-width: 760px)': {
    padding: '100px 0px 290px 0px',
  },

  '@media (max-width: 460px)': {
    padding: '100px 0px 220px 0px',
  },
})

export const OpPersonalizadaContent = styled('div', {
  margin: 'auto',
  width: '80%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '60px',

  p: {
    color: '$gray800',
    lineHeight: 1.5,
  },
})

export const Title = styled('div', {
  color: '$gray800',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  '&:before': {
    content: '',
    width: '13px',
    height: '29px',
    backgroundColor: '$blue',
    display: 'inline-block',
    borderRadius: '2px',
  },
})

export const SubTitle = styled('div', {
  color: '$gray800',
  fontWeight: 'bold',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  '&:before': {
    content: '',
    width: '13px',
    height: '29px',
    backgroundColor: '$gray800',
    display: 'inline-block',
    borderRadius: '2px',
  },
})

export const Metodo = styled('div', {
  fontWeight: 'bold',
  color: '#fff',
  background: '$yellow',
  borderRadius: '6px',
  padding: '10px 15px',
  maxWidth: '130px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
})
