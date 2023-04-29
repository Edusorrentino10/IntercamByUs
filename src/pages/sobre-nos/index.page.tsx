import { Header } from '@/components/Header'
import { Content, SobreNosContainer, TopicsTitle } from './styles'
import Footer from '@/components/Footer'

export default function SobreNos() {
  return (
    <SobreNosContainer>
      <Header />
      <Content>
        <h1>Quem somos</h1>
        <p>
          Nós, da IntercamByUs, acreditamos que o intercâmbio é uma experiência
          transformadora e enriquecedora. Por isso, oferecemos programas
          personalizados, com opções de estudo de idiomas.
        </p>
        <p>
          Além disso, contamos com uma equipe especializada em assessorar nossos
          clientes em cada etapa da viagem, desde a escolha do destino até a
          volta para casa, garantindo segurança, conforto e tranquilidade.
        </p>
        <p>
          Para quem busca evoluir, seja em termos pessoais ou profissionais, o
          intercâmbio com a IntercamByUs é a escolha certa. Venha conhecer o
          mundo com a gente e descubra todo o potencial que você tem.
        </p>
        <p>
          IntercamByUs: sua porta de entrada para o mundo! Oferecemos
          intercâmbios exclusivos que permitem que você explore novos lugares e
          adquira conhecimento ao mesmo tempo.
        </p>
        <p>
          Nosso espírito inovador é evidente em tudo que fazemos, onde trazemos
          as melhores opções para viagens educacionais no exterior.
        </p>
        <p>
          Nossa equipe de especialistas vai ajudá-lo a encontrar o programa
          perfeito, sem extrapolar o seu orçamento. Com a IntercamByUS, voe alto
          para novos destinos e realize seus sonhos de conhecimento!
        </p>
        <div
          style={{
            marginBottom: '110px',
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          <TopicsTitle>
            <span>
              <strong>FUNDAÇÃO</strong> - 2023
            </span>
          </TopicsTitle>
          <TopicsTitle>
            <span>
              Diversos <strong>destinos</strong>, como <strong>EUA</strong>,{' '}
              <strong>Canadá</strong>, <strong>Australia</strong>,{' '}
              <strong>Irlanda</strong>, entre outros.
            </span>
          </TopicsTitle>
          <TopicsTitle>
            <span>
              Equipe <strong>especializada</strong> com o foco totalmente
              voltado para o tipo de intercâmbio de <strong>idiomas</strong>.
            </span>
          </TopicsTitle>
          <TopicsTitle>
            <span>
              Entre alguns dos <strong>idiomas</strong> disponíveis nos
              programas estão <strong>inglês</strong> e{' '}
              <strong>espanhol</strong>.
            </span>
          </TopicsTitle>
        </div>
      </Content>
      <Footer />
    </SobreNosContainer>
  )
}
