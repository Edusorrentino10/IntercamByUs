import { z } from 'zod'
import {
  ErrorPassword,
  Form,
  ImageBox,
  LoginContainer,
  LoginContent,
  TitleContent,
} from './styles'
import { Header } from '@/components/Header'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from '@/assets/Logo.png'

const loginFormSchema = z.object({
  email: z.string(),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter pelo menos 6 dígitos.' }),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export default function Login() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin(data: LoginFormData) {
    try {
      console.log(data)
      // await api.post('/contact', {
      //   name: data.name,
      //   email: data.email,
      //   telefone: data.telefone,
      //   message: data.message,
      // })
      reset()
    } catch (err) {
      // console.log('bad request')
    }
  }

  return (
    <LoginContainer>
      <Header />
      <LoginContent>
        <TitleContent>
          <h1>Login</h1>
          <ImageBox>
            <Image height={100} src={Logo} alt="" />
          </ImageBox>
        </TitleContent>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <input
            placeholder="Email"
            type="email"
            {...register('email')}
            required
          />
          <input
            placeholder="Senha"
            type="password"
            {...register('password')}
            required
          />
          <ErrorPassword>
            <span style={{ color: '#ED4337' }}>{errors.password?.message}</span>
            <span style={{ cursor: 'pointer' }}>Esqueceu a senha?</span>
          </ErrorPassword>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '74%',
            }}
          ></div>
          <input value="Entrar" type="submit" disabled={isSubmitting} />
        </Form>
        <button onClick={() => router.push('/cadastrar')}>Cadastrar-se</button>
      </LoginContent>
    </LoginContainer>
  )
}
