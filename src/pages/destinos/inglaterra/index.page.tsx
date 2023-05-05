import { Header } from '@/components/Header'
import {
  Content,
  DestinosContainer,
  ImagesCitiesContent,
  LondresContent,
} from './styles'
import Footer from '@/components/Footer'
import Image from 'next/image'
import londresImage from '@/assets/destinos/inglaterra/londres-inglaterra.png'
import { LoadingComponent } from '@/components/Loading'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ArrowLeft } from 'phosphor-react'

export default function InglaterraDescription() {
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
          Inglaterra
        </h1>
        <span>
          A Inglaterra é um país rico tanto financeiramento, quanto em história
          e cultura, com cidades vibrantes, como Londres, Manchester e Bristol,
          que oferecem uma ampla variedade de atrações turísticas e culturais.
          Além disso, a Inglaterra é famosa pela sua alta qualidade de ensino e
          excelentes universidades, tornando-a um destino popular para
          estudantes internacionais que desejam aprimorar o inglês.
        </span>
        <span>
          O estilo de vida britânico é conhecido pela sua elegância, modéstia e
          respeito pelas tradições. Os britânicos são conhecidos por sua
          educação e cordialidade, o que faz do país um lugar acolhedor para
          estudantes internacionais.
        </span>
        <span>
          O transporte público é eficiente e há muitas opções de atividades ao
          ar livre, como caminhadas, ciclismo e esportes aquáticos. A Inglaterra
          também é um país com uma rica história literária e artística, sendo um
          lugar inspirador para quem busca enriquecer seus conhecimentos
          culturais.
        </span>
        <ImagesCitiesContent>
          <LondresContent>
            <Image
              style={{
                marginBottom: '30px',
                borderRadius: '4px',
                filter: 'drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25))',
              }}
              width={739}
              src={londresImage}
              alt=""
            />
            <span>
              Londres é uma das cidades mais vibrantes e cosmopolitas do mundo,
              com uma rica cultura que remonta a séculos. A cidade é conhecida
              por suas incríveis opções culturais, incluindo teatros, museus,
              galerias de arte e música ao vivo. O estilo de vida é agitado e
              emocionante, com muitas opções de entretenimento e uma gastronomia
              incrível.
            </span>
            <span>
              A economia de Londres é forte e diversificada, oferecendo muitas
              oportunidades de emprego e carreira. Morar em Londres também pode
              ser uma ótima maneira de aprimorar o inglês, já que é uma das
              cidades mais importantes do mundo em termos de ensino de inglês
              como língua estrangeira.
            </span>
            <span>
              Londres oferece uma grande variedade de opções de lazer para todos
              os gostos. Os amantes da história podem visitar museus como o
              British Museum, o Victoria and Albert Museum e a Torre de Londres.
              Já os fãs de compras podem explorar as lojas da Oxford Street e
              Regent Street ou visitar os mercados de Camden e Portobello Road.
              Os parques também são uma grande atração, como o famoso Hyde Park
              e o Greenwich Park.
            </span>
            <p>
              A vida noturna também é agitada, com opções para todos os gostos,
              desde bares tradicionais até clubes de música eletrônica.
            </p>
          </LondresContent>
        </ImagesCitiesContent>
      </Content>
      <Footer />
    </DestinosContainer>
  )
}
