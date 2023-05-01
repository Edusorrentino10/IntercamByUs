import { Header } from '@/components/Header'
import {
  Content,
  ContatoContainer,
  Form,
  ServicesContent,
  VerticalLine,
  WhatsappBox,
  WhatsappContent,
  SchedulesBox,
  SpanBox,
} from './styles'
import Footer from '@/components/Footer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { api } from '@/lib/axios'

const sendContactFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  telefone: z.string(),
  message: z.string(),
})

type SendContactFormData = z.infer<typeof sendContactFormSchema>

export default function Contato() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<SendContactFormData>({
    resolver: zodResolver(sendContactFormSchema),
  })

  async function handleSendHelpContact(data: SendContactFormData) {
    try {
      await api.post('/contact', {
        name: data.name,
        email: data.email,
        telefone: data.telefone,
        message: data.message,
      })
      reset()
    } catch (err) {
      console.log('bad request')
    }
  }

  const watchName = watch('name')
  const watchEmail = watch('email')
  const watchTelefone = watch('telefone')
  const watchMessage = watch('message')

  return (
    <ContatoContainer>
      <Header />
      <Content>
        <h1>Fale Conosco</h1>
        <p>
          Estamos aqui para te ajudar! Envie suas dúvidas através de e-mail ou
          WhatsApp neste espaço que criamos especialmente para você.
        </p>
        <ServicesContent>
          <Form onSubmit={handleSubmit(handleSendHelpContact)}>
            <input
              type="text"
              placeholder="Nome"
              {...register('name')}
              required
            />
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              required
            />
            <input
              type="number"
              placeholder="Telefone"
              pattern="[0-9]{10,11}"
              {...register('telefone')}
              required
            />
            <label>Mensagem:</label>
            <textarea
              placeholder="Compartilhe aqui suas dúvidas e sugestões de forma detalhada."
              {...register('message')}
              required
            />
            <input
              disabled={
                !watchName ||
                !watchEmail ||
                !watchTelefone ||
                !watchMessage ||
                isSubmitting
              }
              value="Enviar"
              type="submit"
            />
          </Form>
          <VerticalLine />
          <WhatsappBox>
            <WhatsappContent>
              <h2>Atendimento Whatsapp</h2>
              <h3>(27) 99794-7148</h3>
              <SchedulesBox>
                <h4>Horários</h4>
                <SpanBox>
                  <span>Segunda a Sexta - 08:00 às 18:00</span>
                  <span>Sábados 09:00 às 15:00</span>
                </SpanBox>
              </SchedulesBox>
            </WhatsappContent>
            <input type="submit" value="Whatsapp" />
          </WhatsappBox>
        </ServicesContent>
      </Content>
      <Footer />
    </ContatoContainer>
  )
}
