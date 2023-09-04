import { DiamondsFour } from 'phosphor-react'
import {
  Metodo,
  OpPersonalizadaContainer,
  OpPersonalizadaContent,
  SubTitle,
  Title,
} from './styles'

export default function OpcaoPersonalizadaSection() {
  return (
    <OpPersonalizadaContainer>
      <OpPersonalizadaContent>
        <Title>
          <span>
            <strong>OPÇÃO</strong> PERSONALIZADA
          </span>
        </Title>
        <p>
          Além da opção mais tradicional de realizar intercâmbio, também
          oferecemos o nosso método próprio.
        </p>
        <Metodo>
          <DiamondsFour size={26} color="#fff" weight="bold" />
          Método
        </Metodo>
        <p>
          Se duas pessoas possuírem interesse em aprender o idioma do país uma
          da outra, elas podem trocar de casa por um período determinado. Isso
          significa que uma pessoa de Londres que queira aprender espanhol pode
          ir para a casa de alguém em Madrid que quer aprender inglês, e
          vice-versa.
        </p>
        <p>Vamos para a explicação passo a passo:</p>
        <SubTitle>
          <span>Passo 1: Interessados Iniciais</span>
        </SubTitle>
        <p style={{ marginTop: '-20px' }}>
          Duas pessoas de diferentes países, por exemplo, uma pessoa de Londres
          (Inglaterra) e outra de Madrid (Espanha), expressam interesse em
          aprender o idioma uma da outra.
        </p>
        <SubTitle>
          <span>Passo 2: Contato com a agência</span>
        </SubTitle>
        <p style={{ marginTop: '-20px' }}>
          As duas pessoas entram em contato com a IntercamByUs e avaliamos
          inicialmente o interesse e a disponibilidade de ambas as partes.
        </p>
        <SubTitle>
          <span>Passo 3: Avaliação e Qualificação</span>
        </SubTitle>
        <p style={{ marginTop: '-20px' }}>
          Ambas as partes são avaliadas em relação à segurança e
          compatibilidade. <br />
          Isso pode incluir verificação de antecedentes, entrevistas,
          referências e avaliação das condições das casas.
        </p>
        <SubTitle>
          <span>Passo 4: Decisão sobre a Duração</span>
        </SubTitle>
        <p style={{ marginTop: '-20px' }}>
          As partes qualificadas decidem a duração do intercâmbio. Por exemplo,
          elas podem escolher 6 meses.
        </p>
        <SubTitle>
          <span>Passo 5: Plano de Intercâmbio</span>
        </SubTitle>
        <p style={{ marginTop: '-20px' }}>
          Se for acordado um intercâmbio de 6 meses, o plano poderá ser o
          seguinte: <br /> 3 meses em Madrid (a pessoa de Londres fica hospedada
          na casa da pessoa de Madrid). <br /> 3 meses em Londres (a pessoa de
          Madrid fica hospedada na casa da pessoa de Londres).
        </p>
        <SubTitle>
          <span>Passo 6: Preparativos de Viagem</span>
        </SubTitle>
        <p style={{ marginTop: '-20px' }}>
          Os preparativos de viagem são realizados, incluindo passagens aéreas,
          seguro de viagem e outros detalhes logísticos.
        </p>
        <SubTitle>
          <span>Passo 7: Intercâmbio</span>
        </SubTitle>
        <p style={{ marginTop: '-20px' }}>
          As pessoas se encontram em Madrid (nesse exemplo) para os primeiros 3
          meses. Durante esse período, eles seguem um cronograma que inclui
          estudar o idioma local e interagir com o nativo.
        </p>
        <SubTitle>
          <span>Passo 8: Mudança para o Segundo País</span>
        </SubTitle>
        <p style={{ marginTop: '-20px' }}>
          Após os 3 meses em Madrid, eles se mudam para Londres e repetem o
          processo, agora com a pessoa de Madrid aprendendo inglês com a pessoa
          de Londres.
        </p>
        <SubTitle>
          <span>Passo 9: Aprendizado Cultural</span>
        </SubTitle>
        <p style={{ marginTop: '-20px' }}>
          Durante todo o intercâmbio, as pessoas não apenas aprendem o idioma,
          mas também experimentam a cultura e o estilo de vida do país
          anfitrião, além de terem a oportunidade de fazer uma grande amizade
          com o outro intercambista do programa, impulsionando o aprendizado do
          idioma.
        </p>
        <SubTitle>
          <span>Passo 10: Encerramento</span>
        </SubTitle>
        <p style={{ marginTop: '-20px' }}>
          O intercâmbio é concluído, e as pessoas retornam às suas casas de
          origem com novos conhecimentos linguísticos e culturais.
        </p>
      </OpPersonalizadaContent>
    </OpPersonalizadaContainer>
  )
}
