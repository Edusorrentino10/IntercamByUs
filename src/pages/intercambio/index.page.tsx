import { Header } from '@/components/Header'
import {
  CountriesContent,
  DivCountriesCities,
  OrcamentoContainer,
  OrcamentoContent,
} from './styles'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { LoadingComponent } from '@/components/Loading'

export default function IntercambioOrcamento() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSelectDestination(e: any) {
    console.log(e.target.value)
    let value = e.target.value
    if (value.includes('-')) {
      value = value.replace(/-/g, ' ')
    }
    setTimeout(() => setIsLoading(true), 300)
    await router.push(`/intercambio/orcamento?destino=${value}`)
    setIsLoading(false)
  }

  return (
    <>
      <OrcamentoContainer>
        <Header />
        <OrcamentoContent>
          <h1>Orçamento</h1>
          <p>
            Aqui você pode verificar os valores dos cursos oferecidos por
            diversas escolas em vários países, podendo escolher de acordo com
            suas preferências de idioma, país e cidade, para encontrar as
            melhores opções para você.
          </p>
          <DivCountriesCities>
            <CountriesContent>
              <select name="EUA" id="eua" onChange={handleSelectDestination}>
                <option hidden>EUA</option>
                <option value="Boston">Boston</option>
                <option value="New-York">New York</option>
              </select>
              <select
                name="Australia"
                id="australia"
                onChange={handleSelectDestination}
              >
                <option hidden>Austrália</option>
                <option value="Sydney">Sydney</option>
              </select>
              <select
                name="Canada"
                id="canada"
                onChange={handleSelectDestination}
              >
                <option hidden>Canadá</option>
                <option value="Toronto">Toronto</option>
                <option value="Vancouver">Vancouver</option>
              </select>
              <select
                name="Irlanda"
                id="irlanda"
                onChange={handleSelectDestination}
              >
                <option hidden>Irlanda</option>
                <option value="Dublin">Dublin</option>
              </select>
              <select
                name="Inglaterra"
                id="inglaterra"
                onChange={handleSelectDestination}
              >
                <option hidden>Inglaterra</option>
                <option value="Londres">Londres</option>
              </select>
              <select
                name="Espanha"
                id="espanha"
                onChange={handleSelectDestination}
              >
                <option hidden>Espanha</option>
                <option value="Madrid">Madrid</option>
              </select>
            </CountriesContent>
          </DivCountriesCities>
          {isLoading && (
            <div style={{ marginTop: '50px' }}>
              <LoadingComponent />
            </div>
          )}
        </OrcamentoContent>
      </OrcamentoContainer>
      <Footer />
    </>
  )
}
