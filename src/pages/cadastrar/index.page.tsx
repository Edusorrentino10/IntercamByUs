import { z } from 'zod'
import {
  ErrorMessage,
  Form,
  ImageBox,
  LoginContainer,
  LoginContent,
} from './styles'
import { Header } from '@/components/Header'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from '@/assets/Logo.png'
import { ArrowLeft } from 'phosphor-react'

const loginFormSchema = z
  .object({
    email: z.string(),
    name: z.string(),
    cpf: z.string().min(11, { message: 'CPF deve ter 11 dígitos.' }),
    password: z
      .string()
      .min(6, { message: 'A senha deve ter pelo menos 6 dígitos.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não conferem.',
    path: ['confirmPassword'],
  })

type LoginFormData = z.infer<typeof loginFormSchema>

export default function Cadastrar() {
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '75%',
          }}
        >
          <h1>
            <ArrowLeft
              onClick={() => router.push('/login')}
              width={25}
              height={25}
              style={{ cursor: 'pointer' }}
              weight="bold"
            />{' '}
            Cadastrar
          </h1>
          <ImageBox>
            <Image height={100} src={Logo} alt="" />
          </ImageBox>
        </div>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <input
            placeholder="Nome"
            type="text"
            {...register('name')}
            required
          />
          <ErrorMessage>
            <span style={{ color: '#ED4337' }}>{errors.name?.message}</span>
          </ErrorMessage>
          <input
            placeholder="Email"
            type="email"
            {...register('email')}
            required
          />
          <ErrorMessage>
            <span style={{ color: '#ED4337' }}>{errors.email?.message}</span>
          </ErrorMessage>
          <input
            placeholder="CPF"
            type="number"
            {...register('cpf')}
            required
          />
          <ErrorMessage>
            <span style={{ color: '#ED4337' }}>{errors.cpf?.message}</span>
          </ErrorMessage>
          <input
            placeholder="Senha"
            type="password"
            {...register('password')}
            required
          />
          <ErrorMessage>
            <span style={{ color: '#ED4337' }}>{errors.password?.message}</span>
          </ErrorMessage>
          <input
            placeholder="Confirmar Senha"
            type="password"
            {...register('confirmPassword')}
            required
          />
          <ErrorMessage>
            <span style={{ color: '#ED4337' }}>
              {errors.confirmPassword?.message}
            </span>
          </ErrorMessage>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '74%',
            }}
          ></div>
          <input
            style={{ marginBottom: '70px' }}
            value="Criar"
            type="submit"
            disabled={isSubmitting}
          />
        </Form>
      </LoginContent>
    </LoginContainer>
  )
}
