import {
  BannerContainer,
  BannerContent,
  CarouselItems,
  CircleItem,
  Hero,
  ItemsContent,
} from './styles'
import IceDown from '../../../../assets/geloinferior.png'
import Image from 'next/image'
import ImageBannerOrcamentoResponsivo from '@/components/Home/BannerOrcamento/ImageBanner2Responsivo'
import { useRouter } from 'next/router'

interface BannerOrcamentoProps {
  actived: boolean
  onChangeBanner: () => void
}

export default function BannerOrcamento({
  actived,
  onChangeBanner,
}: BannerOrcamentoProps) {
  const router = useRouter()

  return (
    <BannerContainer changeBanner={actived}>
      <BannerContent>
        <Hero>
          <h1>SIMULE JÁ SEU ORÇAMENTO PERSONALIZADO!</h1>
          <p>Nossa equipe está pronta para atender às suas necessidades.</p>
          <button
            disabled={actived}
            onClick={() => router.push('/intercambio')}
          >
            Faça seu orçamento!
          </button>
        </Hero>
        <ImageBannerOrcamentoResponsivo />
      </BannerContent>
      <CarouselItems>
        <ItemsContent>
          <CircleItem onClick={onChangeBanner} />
          <CircleItem />
        </ItemsContent>
      </CarouselItems>
      <Image
        style={{
          zIndex: 0,
          position: 'absolute',
          opacity: '0.85',
          bottom: '0',
          right: '0',
        }}
        src={IceDown}
        height={180}
        quality={50}
        alt=""
      />
    </BannerContainer>
  )
}
