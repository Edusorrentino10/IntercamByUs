import Lottie from 'react-lottie'
import { LoadingContainer } from './styles'
import LoadingAnimation from '@/animations/Loading.json'

const defaultOptionsAnimationLoading = {
  loop: true,
  autoplay: true,
  animationData: LoadingAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export function LoadingComponent() {
  return (
    <LoadingContainer>
      <Lottie
        isClickToPauseDisabled
        width={120}
        options={defaultOptionsAnimationLoading}
      />
    </LoadingContainer>
  )
}
