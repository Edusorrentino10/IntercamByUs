import {
  BannerContainer,
  BannerContent,
  CarouselItems,
  CircleItem,
  Hero,
  ItemsContent,
} from './styles'
import WorldMap from '../../../../assets/WorldmapBackground.svg'
import Image from 'next/image'
import ImagesLondonSanFrascicoResponsive from '@/components/Home/BannerPrincipal/ImagesHomeResponsive'
import IceUpResponsive from '@/components/Home/BannerPrincipal/IceUpHomeResponsive'
import NewYorkSydneyCardsResponsive from '@/components/Home/BannerPrincipal/NySydneyCards'

interface BannerPrincipalProps {
  actived: boolean
  onChangeBanner: () => void
}

export default function BannerPrincipal({
  actived,
  onChangeBanner,
}: BannerPrincipalProps) {
  return (
    <BannerContainer changeBanner={actived}>
      <BannerContent>
        <Hero>
          <h1>
            APRENDA UM NOVO IDIOMA NO <span>EXTERIOR</span>
          </h1>
          <p>
            Aprender uma nova língua nunca foi tão fácil! Junte-se a nós e
            descubra a maneira mais rápida e eficaz de se tornar fluente.
          </p>
        </Hero>
        <ImagesLondonSanFrascicoResponsive />
      </BannerContent>
      <IceUpResponsive />
      <Image
        style={{
          zIndex: -1,
          opacity: '0.22',
          position: 'absolute',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        src={WorldMap}
        height={350}
        quality={50}
        priority
        alt=""
      />
      <NewYorkSydneyCardsResponsive />
      <CarouselItems>
        <ItemsContent>
          <CircleItem />
          <CircleItem onClick={onChangeBanner} />
        </ItemsContent>
      </CarouselItems>
    </BannerContainer>
  )
}
