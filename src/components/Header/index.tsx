import {
  AuthSection,
  ContentBox,
  HeaderContainer,
  LoginSection,
  MenuMobile,
  MenuNavigation,
  MenuUserSection,
  ResponsiveLoading,
  SpanBeneficios,
  SpanLogout,
} from './styles'
import Logo from '../../assets/Logo.png'
import Image from 'next/image'
import { FiUser } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { LoadingComponent } from '../Loading'

export function Header() {
  const router = useRouter()

  const [clickMenuMobile, setClickMenuMobile] = useState(false)
  const [userLogged] = useState(false) // tem que por o setUserLogger, tirei por causa do ESLint
  const [isLoading, setIsLoading] = useState(false)

  function handleMenuMobile() {
    setClickMenuMobile((state) => !clickMenuMobile)
  }

  async function handleRedirectHome() {
    if (router.asPath !== '/') {
      setTimeout(() => setIsLoading(true), 300)
      setClickMenuMobile(false)
      await router.push('/')
      setIsLoading(false)
    }
  }

  async function handleRedirectIntercambio() {
    if (router.asPath !== '/intercambio') {
      setTimeout(() => setIsLoading(true), 300)
      setClickMenuMobile(false)
      await router.push('/intercambio')
      setIsLoading(false)
    }
  }

  async function handleRedirectDestinos() {
    if (router.asPath !== '/destinos') {
      setTimeout(() => setIsLoading(true), 300)
      setClickMenuMobile(false)
      await router.push('/destinos')
      setIsLoading(false)
    }
  }

  async function handleRedirectSobreNos() {
    if (router.asPath !== '/sobre-nos') {
      setTimeout(() => setIsLoading(true), 300)
      setClickMenuMobile(false)
      await router.push('/sobre-nos')
      setIsLoading(false)
    }
  }

  async function handleRedirectContato() {
    if (router.asPath !== '/contato') {
      setTimeout(() => setIsLoading(true), 300)
      setClickMenuMobile(false)
      await router.push('/contato')
      setIsLoading(false)
    }
  }

  async function handleRedirectBeneficios() {
    if (router.asPath !== '/beneficios') {
      setTimeout(() => setIsLoading(true), 300)
      setClickMenuMobile(false)
      await router.push('/beneficios')
      setIsLoading(false)
    }
  }

  async function handleRedirectLogin() {
    if (router.asPath !== '/login') {
      setTimeout(() => setIsLoading(true), 300)
      setClickMenuMobile(false)
      await router.push('/login')
      setIsLoading(false)
    }
  }

  async function handleRedirectCadastrar() {
    if (router.asPath !== '/cadastrar') {
      setTimeout(() => setIsLoading(true), 300)
      setClickMenuMobile(false)
      await router.push('/cadastrar')
      setIsLoading(false)
    }
  }

  return (
    <>
      <HeaderContainer menuActived={clickMenuMobile}>
        <ContentBox>
          <Image
            style={{ cursor: 'pointer' }}
            src={Logo}
            height={110}
            quality={50}
            alt=""
          />

          <MenuNavigation menuActived={clickMenuMobile}>
            <li value="home" tabIndex={1} onClick={handleRedirectHome}>
              Home
            </li>
            <li
              value="intercambio"
              tabIndex={2}
              onClick={handleRedirectIntercambio}
            >
              Intercâmbio
            </li>
            <li tabIndex={3} onClick={handleRedirectDestinos}>
              Destinos
            </li>
            <li tabIndex={4} onClick={handleRedirectSobreNos}>
              Sobre Nós
            </li>
            <li tabIndex={5} onClick={handleRedirectContato}>
              Contato
            </li>
          </MenuNavigation>
          {!userLogged && (
            <AuthSection menuActived={clickMenuMobile}>
              <LoginSection>
                <FiUser size={clickMenuMobile ? 28 : 23} color="#F3B229" />
                <span
                  style={{ outlineColor: '#F3B229', padding: '5px' }}
                  tabIndex={6}
                  onClick={handleRedirectLogin}
                >
                  Entrar
                </span>
              </LoginSection>
              <button
                style={{ outlineColor: '#F3B229' }}
                onClick={handleRedirectCadastrar}
              >
                Cadastrar
              </button>
            </AuthSection>
          )}
          {userLogged && (
            <MenuUserSection menuActived={clickMenuMobile}>
              <p>
                Olá, <strong>Eduardo</strong>!
              </p>
              <p>
                <SpanBeneficios onClick={handleRedirectBeneficios}>
                  Meus Benefícios
                </SpanBeneficios>{' '}
                <span>| </span>
                <SpanLogout>Sair</SpanLogout>
              </p>
            </MenuUserSection>
          )}
          <MenuMobile onClick={handleMenuMobile}>
            <GiHamburgerMenu />
          </MenuMobile>
        </ContentBox>
      </HeaderContainer>
      {isLoading && (
        <ResponsiveLoading>
          <LoadingComponent />
        </ResponsiveLoading>
      )}
      {!isLoading && ( // Gambiarra pro header nao cair quando o menu abrir no mobile, depois arrumar isso.
        <ResponsiveLoading style={{ fontSize: '1px', color: 'white' }}>
          {'.'}
        </ResponsiveLoading>
      )}
    </>
  )
}
