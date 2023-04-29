import { styled } from '@/styles'

export const OportunidadesContainer = styled('div', {
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

export const OportunidadesContent = styled('div', {
  margin: 'auto',
  width: '80%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '60px',
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
    backgroundColor: '$yellow',
    display: 'inline-block',
    borderRadius: '2px',
  },
})

export const ContentBlocks = styled('div', {
  display: 'flex',
  gap: '5%',

  '@media (max-width: 940px)': {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '10%',
  },

  '@media (max-width: 760px)': {
    gridTemplateColumns: '1fr',
    gap: '8%',
    margin: 'auto',
  },

  '@media (max-width: 460px)': {
    gap: '6%',
  },
})

export const BlockDiv = styled('div', {
  height: '200px',
  width: '305px',
  backgroundColor: '$white',
  boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.15)',
  borderRadius: '8px',

  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  justifyContent: 'center',
  alignItems: 'center',

  p: {
    color: '$gray800',
    fontSize: '$md',
    textAlign: 'center',
  },

  '@media (max-width: 1030px)': {
    p: {
      fontSize: '$default',
    },
  },

  '@media (max-width: 940px)': {
    width: '280px',
    p: {
      fontSize: '$md',
    },
  },

  '@media (max-width: 760px)': {
    width: '78vw',
  },

  '@media (max-width: 460px)': {
    width: '78vw',
  },
})
