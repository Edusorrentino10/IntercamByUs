import { Header } from '@/components/Header'
import {
  AustraliaContainer,
  CanadaContainer,
  Content,
  DestinationsContainer,
  DestinosContainer,
  EspanhaContainer,
  EuaContainer,
  InglaterraContainer,
  IrlandaContainer,
  VerMaisBox,
} from './styles'
import Footer from '@/components/Footer'
import Image from 'next/image'
import euaImage from '@/assets/destinos/eua-destino.png'
import australiaImage from '@/assets/destinos/australia-destino.png'
import canadaImage from '@/assets/destinos/canada-destino.png'
import irlandaImage from '@/assets/destinos/irlanda-destino.png'
import inglaterraImage from '@/assets/destinos/inglaterra-destino.png'
import espanhaImage from '@/assets/destinos/espanha-destino.png'
import { Plus } from 'phosphor-react'
import { useRouter } from 'next/router'
import { LoadingComponent } from '@/components/Loading'
import { useState } from 'react'

export default function EuaDescription() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSelectedEUA() {
    setTimeout(() => setIsLoading(true), 300)
    await router.push('/destinos/eua')
    setIsLoading(false)
  }

  async function handleSelectedAustralia() {
    setTimeout(() => setIsLoading(true), 300)
    await router.push('/destinos/australia')
    setIsLoading(false)
  }

  async function handleSelectedCanada() {
    setTimeout(() => setIsLoading(true), 300)
    await router.push('/destinos/canada')
    setIsLoading(false)
  }

  async function handleSelectedIrlanda() {
    setTimeout(() => setIsLoading(true), 300)
    await router.push('/destinos/irlanda')
    setIsLoading(false)
  }

  async function handleSelectedInglaterra() {
    setTimeout(() => setIsLoading(true), 300)
    await router.push('/destinos/inglaterra')
    setIsLoading(false)
  }

  async function handleSelectedEspanha() {
    setTimeout(() => setIsLoading(true), 300)
    await router.push('/destinos/espanha')
    setIsLoading(false)
  }

  return (
    <DestinosContainer>
      <Header />
      <Content>
        {isLoading && (
          <div style={{ marginTop: '-40px' }}>
            <LoadingComponent />
          </div>
        )}
        <h1>Destinos</h1>
        <p>
          Segue abaixo a lista de países onde atuamos com programas de estudo de
          inglês e espanhol.
        </p>
        <DestinationsContainer>
          <EuaContainer onClick={handleSelectedEUA}>
            <Image src={euaImage} height={130} alt="" />
            <h3>ESTADOS UNIDOS</h3>
            <p>
              Os EUA são um destino de intercâmbio popular não só por sua
              diversidade cultural e qualidade do ensino, mas também por
              oferecer uma experiência única para conhecer o estilo de vida de
              uma das maiores potências mundiais.
            </p>
            <VerMaisBox>
              <Plus size={22} color="#efefef" weight="bold" />
            </VerMaisBox>
          </EuaContainer>
          <AustraliaContainer onClick={handleSelectedAustralia}>
            <Image src={australiaImage} height={130} alt="" />
            <h3>AUSTRÁLIA</h3>
            <p>
              Austrália é conhecida por sua fauna e flora únicas, incluindo
              cangurus, coalas e a Grande Barreira de Corais. Além disso, é um
              país de grandes contrastes, com praias paradisíacas e cidades
              cosmopolitas. Lá, é possível estudar inglês e trabalhar durante o
              intercâmbio.
            </p>
            <VerMaisBox>
              <Plus size={22} color="#efefef" weight="bold" />
            </VerMaisBox>
          </AustraliaContainer>
          <CanadaContainer onClick={handleSelectedCanada}>
            <Image src={canadaImage} height={130} alt="" />
            <h3>CANADÁ</h3>
            <p>
              O Canadá é conhecido por sua natureza exuberante e diversidade
              cultural. Suas paisagens incluem montanhas, lagos e florestas,
              enquanto sua sociedade é multicultural e acolhedora. Nele, é
              possível estudar inglês e francês.
            </p>
            <VerMaisBox>
              <Plus size={22} color="#efefef" weight="bold" />
            </VerMaisBox>
          </CanadaContainer>
          <IrlandaContainer onClick={handleSelectedIrlanda}>
            <Image src={irlandaImage} height={130} alt="" />
            <h3>IRLANDA</h3>
            <p>
              A Irlanda é conhecido por ser multicultural e um dos países mais
              desenvolvidos. Considerado como o melhor destino no quesito
              qualidade de vida, é o país preferido da maioria dos brasileiros
              que desejam estudar inglês fora e trabalhar.
            </p>
            <VerMaisBox>
              <Plus size={22} color="#efefef" weight="bold" />
            </VerMaisBox>
          </IrlandaContainer>
          <InglaterraContainer onClick={handleSelectedInglaterra}>
            <Image src={inglaterraImage} height={130} alt="" />
            <h3>INGLATERRA</h3>
            <p>
              A Inglaterra é um destino popular com sua rica história, cultura e
              tradições, além de ser um centro mundialmente renomado de educação
              de qualidade. É conhecida por suas cidades vibrantes, como
              Londres, que oferece uma grande variedade de atrações turísticas,
              incluindo museus, galerias de arte, teatros, lojas e restaurantes
              incríveis.
            </p>
            <VerMaisBox>
              <Plus size={22} color="#efefef" weight="bold" />
            </VerMaisBox>
          </InglaterraContainer>
          <EspanhaContainer onClick={handleSelectedEspanha}>
            <Image src={espanhaImage} height={130} alt="" />
            <h3>ESPANHA</h3>
            <p>
              Aprender espanhol em um ambiente imersivo e estabelecer contatos
              em um centro econômico importante com empresas de sucesso em
              diversos setores. Aqui, é possível trabalhar enquanto estuda. Se
              busca isso, a Espanha é o local ideal para você.
            </p>
            <VerMaisBox>
              <Plus size={22} color="#efefef" weight="bold" />
            </VerMaisBox>
          </EspanhaContainer>
        </DestinationsContainer>
      </Content>
      <Footer />
    </DestinosContainer>
  )
}
