import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  height: '110px',
  backgroundColor: '$blue',
  borderBottom: '1px solid #093872',

  zIndex: 2,

  variants: {
    menuActived: {
      true: {
        '@media (max-width:720px)': {
          minHeight: '100vh',
          position: 'fixed',
        },
      },
      false: {
        '@media (max-width:720px)': {
          height: '110px',
        },
      },
    },
  },
})

export const ContentBox = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1500px) / 2)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 'auto',

  '@media (max-width:1030px)': {
    maxWidth: 'calc(100vw - (100vw - 700px) / 2)',
  },
  '@media (max-width:720px)': {
    maxWidth: 'calc(100vw - (100vw - 250px) / 2)',
    padding: '0 10px',
  },
})

export const MenuNavigation = styled('ul', {
  display: 'flex',
  gap: '45px',
  fontSize: '$md',
  listStyleType: 'none',
  height: '100%',

  variants: {
    menuActived: {
      true: {
        '@media (max-width:720px)': {
          display: 'flex',
          position: 'absolute',
          top: '35vh',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '$lg',
          textAlign: 'center',
          gap: '50px',
        },
      },
      false: {
        '@media (max-width:720px)': {
          display: 'none',
        },
      },
    },
  },

  li: {
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '5px',

    '&:hover': {
      transition: '0.3s',
      color: '$yellow',
    },
  },

  '@media (max-width:1030px)': {
    fontSize: '0.875rem',
    gap: '25px',
  },

  '@media (max-width:880px)': {
    fontSize: '0.8rem',
    gap: '15px',
  },

  '@media (max-width:720px)': {
    flexDirection: 'column',
  },
})

export const LoginSection = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
  span: {
    borderBottom: '1px solid transparent',
  },

  '&:hover': {
    span: {
      borderBottom: '1px solid $yellow',
      transition: '0.3s',
      opacity: '0.99',
    },
  },

  '@media (max-width:1030px)': {
    fontSize: '0.875rem',
    gap: '5px',
  },

  '@media (max-width:880px)': {
    fontSize: '0.8rem',
    gap: '0px',
  },

  '@media (max-width:720px)': {
    fontSize: '$lg',
    gap: '10px',
  },
})

export const AuthSection = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '35px',

  '@media (max-width:1030px)': {
    gap: '15px',
  },

  button: {
    color: '$gray100',
    backgroundColor: '$blue',
    border: '2px solid $yellow',
    borderRadius: '8px',
    padding: '8px',
    fontSize: '$default',

    '@media (max-width:1030px)': {
      fontSize: '0.875rem',
      padding: '6px',
    },

    '@media (max-width:880px)': {
      fontSize: '0.8rem',
      padding: '5px',
    },

    '@media (max-width:720px)': {
      fontSize: '$lg',
      padding: '10px',
    },

    '&:hover': {
      backgroundColor: '$yellow',
      color: '$blue',
      border: '2px solid transparent',
      transition: '0.3s',
    },
  },

  '@media (max-width:720px)': {
    display: 'none',
  },

  variants: {
    menuActived: {
      true: {
        '@media (max-width:720px)': {
          display: 'flex',
          position: 'absolute',
          top: '18vh',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          textAlign: 'center',
          gap: '60px',
          padding: '0 0 30px 0',
          borderBottom: '1px solid #093872',
        },
      },
      false: {
        '@media (max-width:720px)': {
          display: 'none',
        },
      },
    },
  },
})

export const MenuUserSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',

  '@media (max-width:1030px)': {
    fontSize: '0.875rem',
  },

  '@media (max-width:850px)': {
    fontSize: '0.8rem',
  },

  variants: {
    menuActived: {
      true: {
        '@media (max-width:720px)': {
          display: 'flex',
          position: 'absolute',
          top: '18vh',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '$md',
          width: '100vw',
          textAlign: 'center',
          gap: '20px',
          padding: '0 0 25px 0',
          borderBottom: '1px solid #093872',

          p: {
            '&:first-child': {
              fontSize: '$default',
            },
            '&:nth-child(2)': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '15px',
            },
          },
        },
      },
      false: {
        '@media (max-width:720px)': {
          display: 'none',
        },
      },
    },
  },
})

export const SpanBeneficios = styled('span', {
  color: '#F3B229',
  cursor: 'pointer',
  borderBottom: '1px solid $transparent',
  '&:hover': {
    borderBottom: '1px solid $yellow',
    transition: '0.3s',
    opacity: '0.99',
  },
  '@media (max-width:720px)': {
    '&:hover': {
      borderBottom: '0px',
    },
  },
})

export const SpanLogout = styled('span', {
  cursor: 'pointer',

  borderBottom: '1px solid $transparent',

  '&:hover': {
    borderBottom: '1px solid $gray100',
    transition: '0.3s',
    opacity: '0.99',
  },

  '@media (max-width:720px)': {
    '&:hover': {
      borderBottom: '0px',
    },
  },
})

export const MenuMobile = styled('div', {
  fontSize: '35px',
  display: 'none',
  color: '$gray100',
  cursor: 'pointer',

  '@media (max-width:720px)': {
    display: 'flex',
  },
})

export const ResponsiveLoading = styled('div', {
  fontSize: '35px',
  color: '$gray100',
  cursor: 'pointer',
  marginBottom: '-90px',
  marginTop: '15px',

  '@media(max-width:720px)': {
    marginBottom: '-90px',
    marginTop: '0px',
  },
})
