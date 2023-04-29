import { styled } from '@/styles'

export const AnimationContent = styled('div', {
  marginTop: '150px',
  marginBottom: '280px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '30px',
  alignItems: 'center',

  '@media (max-width: 460px)': {
    marginTop: '100px',
    marginBottom: '140px',
  },
})

export const ReturnButton = styled('button', {
  backgroundColor: '#fff',
  padding: '10px 30px 10px 15px',
  borderRadius: '6px',
  border: '2px solid $yellow',
  color: '$yellow',
  fontSize: '$lg',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '-30px',

  '&:hover': {
    transition: '300ms',
    backgroundColor: '$yellow',
    color: '$white',
  },
})
