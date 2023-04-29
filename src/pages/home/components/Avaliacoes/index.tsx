import {
  AvaliacoesContainer,
  AvaliacoesContent,
  BlockDiv,
  ContentBlocks,
  Quotes,
  Title,
} from './styles'
import { IoMdQuote } from 'react-icons/io'

export default function AvaliacoesSection() {
  return (
    <AvaliacoesContainer>
      <AvaliacoesContent>
        <Title>
          <span>
            <strong>AVALIAÇÕES</strong> DE CLIENTES
          </span>
        </Title>
        <ContentBlocks>
          <BlockDiv>
            <Quotes>
              <IoMdQuote color="#103F79" size={40} />
            </Quotes>
            <p>
              &quot;A minha experiência com a IntercamByUs foi excelente! Desde
              o primeiro contato, fui muito bem atendido pelos consultores, que
              me ajudaram a escolher o melhor programa de estudos de acordo com
              as minhas necessidades e expectativas.”
            </p>
            <h1>Felipe Silva</h1>
          </BlockDiv>
          <BlockDiv>
            <Quotes>
              <IoMdQuote color="#103F79" size={40} />
            </Quotes>
            <p>
              &quot;Foi incrível! Durante toda a minha estadia no exterior, a
              agência esteve disponível para esclarecer minhas dúvidas e ajudar
              em qualquer situação. Eu realmente me senti segura e amparada
              durante todo o processo.”
            </p>
            <h1>Isabella Cordeiro</h1>
          </BlockDiv>
          <BlockDiv>
            <Quotes>
              <IoMdQuote color="#103F79" size={40} />
            </Quotes>
            <p>
              &quot;Fantástico, o intercâmbio superou minhas expectativas em
              termos de aprendizado e experiência cultural. Com certeza
              recomendo para quem busca uma experiência de intercâmbio de
              qualidade!”
            </p>
            <h1>Marcela Ramos</h1>
          </BlockDiv>
          <BlockDiv>
            <Quotes>
              <IoMdQuote color="#103F79" size={40} />
            </Quotes>
            <p>
              &quot;Fiquei extremamente satisfeito com o serviço prestado pela
              agência. Os consultores foram muito atenciosos e competentes, se
              preocuparam em fornecer informações precisas e detalhadas sobre o
              país que optei por ir. Recomendo!&quot;
            </p>
            <h1>João Pedro Oliveira</h1>
          </BlockDiv>
        </ContentBlocks>
      </AvaliacoesContent>
    </AvaliacoesContainer>
  )
}
