import { Header } from '@/components/Header'
import {
  BostonContent,
  Content,
  DestinosContainer,
  ImagesCitiesContent,
  TimesquareContent,
} from './styles'
import Footer from '@/components/Footer'
import Image from 'next/image'
import timesquareImage from '@/assets/destinos/eua/timesquare-eua.png'
import bostonImage from '@/assets/destinos/eua/boston-eua.png'
import { ArrowLeft } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { LoadingComponent } from '@/components/Loading'

export default function EuaDescription() {
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
          Estados Unidos
        </h1>
        <span>
          Se você está pensando em fazer um intercâmbio, os Estados Unidos são
          uma excelente opção! O país tem uma série de características e
          qualidades que agradam a muitos estudantes internacionais.
        </span>
        <span>
          Os Estados Unidos possuem um estilo de vida vibrante e animado. As
          cidades americanas são conhecidas pela sua diversidade cultural e pela
          grande quantidade de eventos e atividades que acontecem diariamente.
          Os estudantes internacionais têm a oportunidade de vivenciar essa
          cultura e fazer parte dessa atmosfera agitada e empolgante.
        </span>
        <span>
          O poder de compra também é uma grande vantagem nos Estados Unidos. O
          país possui uma economia forte e estável, o que permite que os
          estudantes internacionais tenham acesso a uma grande variedade de
          produtos e serviços a preços razoáveis.
        </span>
        <span>
          Também vale destacar que os Estados Unidos são conhecidos pela sua
          cultura empreendedora e inovadora. O país é um berço de grandes
          empresas e startups, o que pode ser inspirador para os estudantes
          internacionais que buscam desenvolver suas próprias ideias e projetos.
        </span>
        <span>
          Então, fazer um intercâmbio nos Estados Unidos pode ser uma
          experiência única e enriquecedora. Com uma cultura vibrante, uma
          economia forte, um sistema educacional de qualidade e uma diversidade
          cultural e geográfica incrível, o país oferece muitas oportunidades
          para os estudantes internacionais.
        </span>
        <ImagesCitiesContent>
          <TimesquareContent>
            <Image
              style={{
                marginBottom: '30px',
                borderRadius: '4px',
                filter: 'drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25))',
              }}
              width={520}
              height={350}
              src={timesquareImage}
              alt=""
            />
            <span>
              Nova York é uma cidade icônica, com uma energia vibrante e agitada
              que a torna um destino turístico popular em todo o mundo. Sua
              paisagem urbana é marcada por arranha-céus imponentes, e suas ruas
              movimentadas estão repletas de vida, com muitas opções de compras,
              gastronomia e entretenimento.
            </span>
            <p>
              {' '}
              Além disso, a cidade é um importante centro financeiro e
              comercial, o que significa que os estudantes internacionais têm
              muitas oportunidades de aprendizado em negócios e finanças.
            </p>
          </TimesquareContent>
          <BostonContent>
            <Image
              style={{
                marginBottom: '30px',
                borderRadius: '4px',
                filter: 'drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25))',
              }}
              width={520}
              height={350}
              src={bostonImage}
              alt=""
            />
            <span>
              Boston é uma cidade histórica e culturalmente rica, com uma
              arquitetura única que preserva sua herança colonial. É um
              importante centro acadêmico, com as universidades mais renomadas
              do mundo, como a Universidade de Harvard e o MIT.
            </span>
            <p>
              {' '}
              Ainda, a cidade é um paraíso cultural, com muitas opções de
              teatros, museus e galerias de arte, proporcionando aos estudantes
              internacionais uma experiência inesquecível de imersão na cultura
              americana.
            </p>
          </BostonContent>
        </ImagesCitiesContent>
      </Content>
      <Footer />
    </DestinosContainer>
  )
}
