import { Header } from '@/components/Header'
import {
  VancouverContent,
  Content,
  DestinosContainer,
  ImagesCitiesContent,
  TorontoContent,
} from './styles'
import Footer from '@/components/Footer'
import Image from 'next/image'
import torontoImage from '@/assets/destinos/canada/toronto-canada.png'
import vancouverImage from '@/assets/destinos/canada/vancouver-canada.png'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ArrowLeft } from 'phosphor-react'
import { LoadingComponent } from '@/components/Loading'

export default function CanadaDescription() {
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
          Canadá
        </h1>
        <span>
          O Canadá é um país incrível para quem deseja fazer intercâmbio de
          estudo de inglês. Com uma cultura acolhedora e diversificada, uma
          economia forte e um estilo de vida saudável e equilibrado, o país
          oferece uma experiência única e enriquecedora para estudantes
          internacionais.
        </span>
        <span>
          Uma das principais razões para escolher o Canadá como destino de
          intercâmbio é a qualidade do ensino. O país tem uma das melhores
          educações do mundo, com várias escolas de inglês de alta qualidade.
          Além disso, a cultura canadense é muito inclusiva e acolhedora,
          oferecendo um ambiente seguro e amigável para os estudantes
          internacionais.
        </span>
        <span>
          O estilo de vida no Canadá é saudável e equilibrado, com muitas opções
          de atividades ao ar livre, como esportes de inverno, caminhadas e
          passeios de bicicleta. A comida é deliciosa e diversificada, com
          muitas opções de restaurantes e mercados de alimentos frescos. Além
          disso, o poder de compra no Canadá é favorável para estudantes
          internacionais, tornando a vida mais acessível e agradável.
        </span>
        <span>
          Outra vantagem do Canadá é sua localização geográfica. O país faz
          fronteira com os Estados Unidos, oferecendo a possibilidade de
          explorar outros lugares incríveis na América do Norte. Além disso, a
          natureza no Canadá é de tirar o fôlego, com lagos cristalinos,
          montanhas majestosas e uma vida selvagem abundante.
        </span>
        <span>
          Em resumo, o Canadá é um destino incrível para estudantes
          internacionais que desejam fazer intercâmbio de estudo de inglês. Com
          sua educação de alta qualidade, cultura acolhedora, estilo de vida
          saudável, poder de compra favorável e localização privilegiada, o país
          oferece uma experiência única e inesquecível para quem decide estudar
          lá.
        </span>
        <ImagesCitiesContent>
          <TorontoContent>
            <Image
              style={{
                marginBottom: '30px',
                borderRadius: '4px',
                filter: 'drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25))',
              }}
              width={520}
              height={350}
              src={torontoImage}
              alt=""
            />
            <span>
              Toronto é uma cidade multicultural e animada, com uma das maiores
              populações de imigrantes do mundo. O estilo de vida é equilibrado,
              com muitas opções de atividades ao ar livre e uma cultura
              diversificada e agitada. A economia é forte e diversificada, com
              muitas oportunidades para estudantes internacionais interessados
              em negócios e tecnologia.
            </span>
            <p>
              {' '}
              É uma excelente escolha para quem deseja fazer um intercâmbio de
              estudo de inglês, pois possui escolas de alta qualidade e uma
              atmosfera acolhedora e amigável, acostumada a receber imigrantes.
              Além disso, a cidade é segura e possui uma boa infraestrutura, com
              transporte público eficiente e uma variedade de opções de moradia.
              As pessoas em Toronto são hospitaleiras e amigáveis, e há muitas
              atividades culturais para desfrutar, como festivais de música,
              teatro e cinema.
            </p>
          </TorontoContent>
          <VancouverContent>
            <Image
              style={{
                marginBottom: '30px',
                borderRadius: '4px',
                filter: 'drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25))',
              }}
              width={520}
              height={350}
              src={vancouverImage}
              alt=""
            />
            <span>
              Vancouver é uma cidade cosmopolita , moderna e está localizada na
              costa oeste do Canadá, próxima à cidade de Seattle, nos Estados
              Unidos. É cercada por uma paisagem natural deslumbrante com
              montanhas, florestas e praias. O estilo de vida é saudável e
              ativo, com muitas opções de atividades ao ar livre, como trilhas
              para caminhadas, esportes aquáticos e ciclismo. Normalmente é
              vista com bons olhares pelos estudantes imigrantes por ter um
              clima mais tranquilo comparado a outras cidades do Canadá.
            </span>
            <p>
              {' '}
              Os canadenses são conhecidos por serem muito acolhedores e
              hospitaleiros, o que torna Vancouver um lugar acolhedor e
              confortável para estudantes internacionais. A cidade é segura,
              limpa e bem organizada, com um sistema de transporte público
              eficiente e acessível.
            </p>
          </VancouverContent>
        </ImagesCitiesContent>
      </Content>
      <Footer />
    </DestinosContainer>
  )
}
