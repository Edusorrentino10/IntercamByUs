/* eslint-disable @next/next/no-img-element */
import { Header } from '@/components/Header'
import { HomeContainer } from './styles'
import BannerPrincipal from './components/BannerPrincipal'
import BannerOrcamento from './components/BannerOrcamento'
import { useEffect, useState } from 'react'
import OportunidadesSection from './components/Oportunidades'
import AvaliacoesSection from './components/Avaliacoes'
import Footer from '@/components/Footer'
import OpcaoPersonalizadaSection from './components/OpcaoPersonalizada'

export default function Home() {
  const [changeBanner, setChangeBanner] = useState(true)

  function handleChangeBanner() {
    return setChangeBanner((state) => !state)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeBanner((state) => !state)
    }, 8000)
    return () => clearInterval(interval)
  }, [changeBanner])
  return (
    <HomeContainer>
      <Header />
      <BannerPrincipal
        actived={changeBanner}
        onChangeBanner={handleChangeBanner}
      />
      <BannerOrcamento
        actived={changeBanner}
        onChangeBanner={handleChangeBanner}
      />
      <OpcaoPersonalizadaSection />
      <OportunidadesSection />
      <AvaliacoesSection />
      <Footer />
    </HomeContainer>
  )
}
