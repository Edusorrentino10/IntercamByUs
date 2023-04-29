import Lottie from 'lottie-react'
import { AnimationContent, ReturnButton } from './styles'
import ErrorAnimation from '@/animations/error404Animation.json'
import { ArrowLeft } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { LoadingComponent } from '../Loading'

const style = {
  height: 280,
}

export function ErrorComponent() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function handleBackToIntercambio() {
    setTimeout(() => setIsLoading(true), 300)
    await router.push('/intercambio')
    setIsLoading(false)
  }

  return (
    <AnimationContent>
      <Lottie style={style} animationData={ErrorAnimation} loop={true} />
      <ReturnButton onClick={handleBackToIntercambio}>
        <ArrowLeft size={22} weight="bold" />
        Voltar
      </ReturnButton>
      {isLoading && <LoadingComponent />}
    </AnimationContent>
  )
}
