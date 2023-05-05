import { Header } from '@/components/Header'
import {
  Content,
  DestinosContainer,
  ImagesCitiesContent,
  EspanhaContent,
} from './styles'
import Footer from '@/components/Footer'
import Image from 'next/image'
import madridImage from '@/assets/destinos/espanha/madrid-espanha.png'
import { LoadingComponent } from '@/components/Loading'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ArrowLeft } from 'phosphor-react'

export default function EspanhaDescription() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleBackToDestinos() {
    setTimeout(() => setIsLoading(true), 300)
    await router.push('/destinos')
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
        <h1>
          <ArrowLeft
            onClick={handleBackToDestinos}
            width={25}
            height={25}
            style={{ cursor: 'pointer' }}
            weight="bold"
          />{' '}
          Espanha
        </h1>
        <span>
          A Espanha é um país repleto de história, cultura e tradições
          vibrantes, que atraem estudantes internacionais de todo o mundo para
          fazer intercâmbio de estudo de espanhol. A língua espanhola é a
          segunda mais falada no mundo, tornando o país uma escolha popular para
          aqueles que desejam aprender ou aprimorar seus conhecimentos em
          espanhol.
        </span>
        <span>
          O estilo de vida espanhol é conhecido por ser descontraído e amigável,
          com uma cultura rica em gastronomia, arte e música. As cidades
          espanholas são animadas e cheias de vida, com muitos bares, cafés e
          restaurantes aconchegantes, onde os moradores se reúnem para desfrutar
          de uma boa comida e bebida.
        </span>
        <span>
          O poder de compra na Espanha é considerado bastante acessível,
          especialmente em comparação com outros países europeus. O custo de
          vida é razoável, o que significa que estudantes internacionais podem
          viver confortavelmente sem gastar muito dinheiro.
        </span>
        <span>
          Além disso, a Espanha oferece uma grande variedade de atividades
          culturais e de lazer, desde praias de areia branca até montanhas
          impressionantes. A Espanha é o lar de uma série de universidades de
          renome, proporcionando oportunidades para estudantes internacionais
          aprenderem com professores altamente qualificados e experimentar a
          vida acadêmica espanhola.
        </span>
        <ImagesCitiesContent>
          <EspanhaContent>
            <Image
              style={{
                marginBottom: '30px',
                borderRadius: '4px',
                filter: 'drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25))',
              }}
              width={739}
              src={madridImage}
              alt=""
            />
            <span>
              Madrid é uma cidade vibrante e cosmopolita, conhecida por sua rica
              cultura e história. A cidade é o centro político e econômico da
              Espanha, com muitas oportunidades de trabalho e estudo para
              estrangeiros. O estilo de vida é descontraído e animado, com
              muitas opções de lazer, como restaurantes, bares e cafés.
            </span>
            <span>
              A cultura espanhola é fascinante e se reflete na arquitetura,
              gastronomia e nas tradições locais, como as famosas touradas e
              festivais de rua. A cidade também é conhecida por seus museus de
              classe mundial, como o Prado e o Reina Sofia.
            </span>
            <p>
              Além disso, o custo de vida em Madrid é relativamente acessível,
              tornando-a uma escolha popular para estudantes internacionais. As
              escolas de espanhol são de alta qualidade e oferecem uma grande
              variedade de cursos e programas para estudantes de todos os
              níveis. Madrid é, portanto, um excelente lugar para aprender
              espanhol e imergir na cultura vibrante da Espanha.
            </p>
          </EspanhaContent>
        </ImagesCitiesContent>
      </Content>
      <Footer />
    </DestinosContainer>
  )
}
