import { Header } from '@/components/Header'
import {
  Content,
  DestinosContainer,
  ImagesCitiesContent,
  SydneyContent,
} from './styles'
import Footer from '@/components/Footer'
import Image from 'next/image'
import sydneyImage from '@/assets/destinos/australia/sydney-aus.png'
import { ArrowLeft } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { LoadingComponent } from '@/components/Loading'

export default function AustraliaDescription() {
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
          Austrália
        </h1>
        <span>
          Austrália é um destino popular para estudantes internacionais que
          desejam fazer intercâmbio de estudo de inglês e ainda poder trabalhar
          para poder se sustentar no país. Além de ser um lugar seguro e
          acolhedor, a Austrália tem uma cultura vibrante e diversificada, com
          muitas opções de lazer e entretenimento para os estudantes. O país
          também é conhecido por suas paisagens naturais incríveis, que vão
          desde praias de areia branca a florestas tropicais exuberantes e
          desertos áridos, além de animais típicos e incríveis, como os cangurus
          e os coalas.
        </span>
        <span>
          O estilo de vida australiano é descontraído e saudável, com muitas
          oportunidades para atividades ao ar livre, como surfe, caminhadas e
          acampamentos. A comida australiana é influenciada por diversas
          culturas, com destaque para os frutos do mar frescos e as carnes
          grelhadas. Além disso, a Austrália é um país multicultural, com uma
          população diversa de diferentes origens étnicas, o que torna o país
          ainda mais interessante e enriquecedor para os estudantes
          internacionais.
        </span>
        <span>
          Em termos econômicos, a Austrália tem um poder de compra forte e uma
          economia estável, o que a torna um destino atraente para estudantes
          internacionais que buscam oportunidades de emprego e crescimento
          profissional. O país também tem um sistema educacional de alta
          qualidade, com universidades e escolas de inglês reconhecidas
          mundialmente, o que proporciona uma excelente oportunidade para
          aprimorar o idioma e desenvolver novas habilidades.
        </span>
        <span>
          Em resumo, a Austrália é um destino incrível para estudantes
          internacionais que desejam fazer intercâmbio de estudo de inglês. Com
          uma cultura vibrante, paisagens naturais deslumbrantes, estilo de vida
          saudável e descontraído, e uma economia forte, a Austrália oferece uma
          experiência enriquecedora e inesquecível para estudantes de todo o
          mundo.
        </span>
        <ImagesCitiesContent>
          <SydneyContent>
            <Image
              style={{
                marginBottom: '30px',
                borderRadius: '4px',
                filter: 'drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25))',
              }}
              width={739}
              src={sydneyImage}
              alt=""
            />
            <span>
              Sydney é uma cidade vibrante e cosmopolita, conhecida por suas
              praias deslumbrantes, marcos icônicos, como a Opera House e a
              Harbour Bridge, e uma cultura rica e diversificada. Como uma das
              principais cidades da Austrália, Sydney tem uma economia forte e
              muitas oportunidades de emprego para estudantes internacionais.
            </span>
            <span>
              O estilo de vida em Sydney é descontraído e saudável, com muitas
              opções de atividades ao ar livre, como surfe, caminhadas e
              passeios de barco. A cidade também tem uma cena cultural animada,
              com muitos eventos, shows e festivais ao longo do ano.
            </span>
            <p>
              {' '}
              Para estudantes internacionais que desejam fazer intercâmbio de
              estudo de inglês, Sydney é uma escolha excelente. A cidade tem uma
              infraestrutura moderna e eficiente, com transporte público
              confiável e fácil acesso a outras partes da Austrália. Além disso,
              a qualidade do ensino é de alto nível, com várias escolas de
              inglês de renome e professores experientes.
            </p>
          </SydneyContent>
        </ImagesCitiesContent>
      </Content>
      <Footer />
    </DestinosContainer>
  )
}
