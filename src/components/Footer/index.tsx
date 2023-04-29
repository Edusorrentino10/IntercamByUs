import { useRouter } from 'next/router'
import {
  BoxMidia,
  Content,
  CopyrightSection,
  FooterContainer,
  MidiaContent,
  Novidades,
  NovidadesContent,
  Produtos,
  ProdutosContent,
  SigaNos,
  SigaNosContent,
  Titles,
} from './styles'
import { BsInstagram } from 'react-icons/bs'
import { FiYoutube, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  const router = useRouter()

  return (
    <FooterContainer>
      <Titles>
        <SigaNos>SIGA-NOS</SigaNos>
        <Produtos>PRODUTOS</Produtos>
        <Novidades>NOVIDADES</Novidades>
      </Titles>
      <Content>
        <SigaNosContent>
          <MidiaContent>
            <BoxMidia>
              <BsInstagram size={25} />
            </BoxMidia>
            <BoxMidia>
              <FiYoutube size={30} />
            </BoxMidia>
            <BoxMidia>
              <FiTwitter size={26} />
            </BoxMidia>
          </MidiaContent>
          <p>Rua Frei Aniceto, Itapuã, Vila Velha - ES 29126-094</p>
        </SigaNosContent>
        <ProdutosContent>
          <p onClick={() => router.push('/')}>Home</p>
          <p onClick={() => router.push('/intercambio')}>Intercâmbios</p>
          <p onClick={() => router.push('/destinos')}>Destinos</p>
          <p onClick={() => router.push('/sobre-nos')}>Sobre Nós</p>
          <p onClick={() => router.push('/contato')}>Contato</p>
        </ProdutosContent>
        <NovidadesContent>
          <p>
            Fique por dentro das novidades e aproveite promoções exclusivas.
          </p>
          <form style={{ display: 'grid' }}>
            <label>Nome:</label>
            <input type="text" placeholder="Nome" required />
            <label>Email:</label>
            <input type="email" placeholder="Email" required />
            <input type="submit" value="Enviar" />
          </form>
        </NovidadesContent>
      </Content>
      <CopyrightSection>
        <span>Copyright © 2023 - IntercamByUs.</span>
      </CopyrightSection>
    </FooterContainer>
  )
}
