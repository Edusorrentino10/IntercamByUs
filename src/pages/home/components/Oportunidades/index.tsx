import {
  BlockDiv,
  ContentBlocks,
  OportunidadesContainer,
  OportunidadesContent,
  Title,
} from './styles'
import idiomasImg from './assets/idiomas.svg'
import estudoTrabalhoImg from './assets/estudoTrabalho.svg'
import curriculoImg from './assets/curriculo.svg'
import amadurecerImg from './assets/amadurecer.svg'
import Image from 'next/image'

export default function OportunidadesSection() {
  return (
    <OportunidadesContainer>
      <OportunidadesContent>
        <Title>
          <span>
            <strong>OPORTUNIDADES</strong> PARA
          </span>
        </Title>
        <ContentBlocks>
          <BlockDiv>
            <Image src={idiomasImg} width={55} quality={50} alt="aaa" />
            <p>Explorar novos idiomas</p>
          </BlockDiv>
          <BlockDiv>
            <Image src={estudoTrabalhoImg} width={55} quality={50} alt="aaa" />
            <p>Estudo e Trabalho</p>
          </BlockDiv>
          <BlockDiv>
            <Image src={curriculoImg} width={55} quality={50} alt="aaa" />
            <p>Impulsionar seu currículo</p>
          </BlockDiv>
          <BlockDiv>
            <Image src={amadurecerImg} width={55} quality={50} alt="aaa" />
            <p>Amadurecer como pessoa</p>
          </BlockDiv>
        </ContentBlocks>
      </OportunidadesContent>
    </OportunidadesContainer>
  )
}
