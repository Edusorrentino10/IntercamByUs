import { Header } from '@/components/Header'
import {
  Content,
  DestinosContainer,
  ImagesCitiesContent,
  DublinContent,
} from './styles'
import Footer from '@/components/Footer'
import Image from 'next/image'
import dublinImage from '@/assets/destinos/irlanda/dublin-irlanda.png'
import { LoadingComponent } from '@/components/Loading'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ArrowLeft } from 'phosphor-react'

export default function IrlandaDescription() {
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
          Irlanda
        </h1>
        <span>
          Se você está procurando um destino de intercâmbio de estudo de inglês
          que combine uma rica cultura histórica, paisagens naturais
          deslumbrantes e um estilo de vida descontraído e acolhedor, a Irlanda
          pode ser a escolha perfeita para você. Nela, é possível estudar inglês
          e trabalhar durante o período de estudo no país, o que facilita
          bastante a questão financeira para se manter no país.
        </span>
        <span>
          A primeira coisa que você vai notar quando chegar na Irlanda é a
          hospitalidade das pessoas. Os irlandeses são conhecidos por serem
          simpáticos, acolhedores e sempre prontos para ajudar os outros. Isso
          faz com que seja fácil se adaptar ao novo ambiente e se sentir em
          casa.
        </span>
        <span>
          Além disso, a Irlanda é um país de paisagens deslumbrantes, com praias
          de areia dourada, penhascos imponentes, montanhas verdes e vales de
          tirar o fôlego. A cidade de Dublin, em particular, é uma das mais
          vibrantes e animadas da Europa, com uma vida noturna agitada, muitos
          pubs tradicionais, restaurantes, teatros, museus e galerias de arte.
        </span>
        <span>
          O estilo de vida irlandês é descontraído e agradável. Os irlandeses
          são conhecidos por gostarem de uma boa conversa, de música ao vivo e
          de uma boa cerveja. Eles também são muito ligados às suas raízes
          culturais e adoram celebrar suas tradições, como o Saint
          Patrick&apos;s Day, um dos feriados mais famosos do mundo.
        </span>
        <ImagesCitiesContent>
          <DublinContent>
            <Image
              style={{
                marginBottom: '30px',
                borderRadius: '4px',
                filter: 'drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25))',
              }}
              width={739}
              src={dublinImage}
              alt=""
            />
            <span>
              Dublin é a capital da Irlanda e um destino popular para estudantes
              internacionais que desejam aprimorar suas habilidades no idioma
              inglês. A cidade possui uma cultura rica e vibrante, com uma
              história fascinante e muitos locais históricos para explorar. O
              estilo de vida é descontraído e amigável, com muitas opções de
              entretenimento e atividades culturais.
            </span>
            <span>
              A economia de Dublin é forte e em constante crescimento, com
              muitas empresas de tecnologia e serviços financeiros estabelecendo
              suas sedes na cidade. Isso significa que há muitas oportunidades
              de trabalho para estudantes internacionais interessados nessas
              áreas.
            </span>
            <p>
              {' '}
              Além disso, a Irlanda é um país conhecido por receber bem
              estrangeiros, tornando Dublin um lugar acolhedor e confortável
              para estudantes internacionais. A cidade também possui uma
              excelente rede de transporte público e é fácil de se locomover a
              pé ou de bicicleta. Em resumo, Dublin é uma ótima escolha para
              quem busca um intercâmbio de estudo de inglês com uma mistura de
              cultura, economia e estilo de vida acolhedor.
            </p>
          </DublinContent>
        </ImagesCitiesContent>
      </Content>
      <Footer />
    </DestinosContainer>
  )
}
