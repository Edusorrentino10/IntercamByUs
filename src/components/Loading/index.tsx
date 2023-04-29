import Lottie from 'lottie-react'
import { LoadingContainer } from './styles'
import LoadingAnimation from '@/animations/Loading.json'

const style = {
  height: 120,
}

export function LoadingComponent() {
  return (
    <LoadingContainer>
      <Lottie style={style} animationData={LoadingAnimation} loop={true} />
    </LoadingContainer>
  )
}
