import { Header } from '@/components/Header'
import { Content, ContatoContainer, TopicsTitle, Form } from './styles'
import Footer from '@/components/Footer'

export default function Contato() {
  return (
    <ContatoContainer>
      <Header />
      <Content>
        <h1>Fale Conosco</h1>
        <p>
          Estamos aqui para te ajudar! Envie suas dúvidas através de e-mail ou
          WhatsApp neste espaço que criamos especialmente para você.
        </p>
        <Form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input
            type="number"
            placeholder="Telefone"
            pattern="[0-9]{10,11}"
            required
          />
          <label>Mensagem:</label>
          <textarea placeholder="Compartilhe aqui suas dúvidas e sugestões de forma detalhada." />
        </Form>
      </Content>
      <Footer />
    </ContatoContainer>
  )
}
