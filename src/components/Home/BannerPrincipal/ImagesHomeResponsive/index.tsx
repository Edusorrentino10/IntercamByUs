import { FullWidth, ScreenWidth1030, ScreenWidth880 } from './styles'
import Image from 'next/image'
import imagesBanner from '../../../../assets/imagesBanner1Principal.png'

export default function ImagesLondonSanFrascicoResponsive() {
  return (
    <>
      <FullWidth>
        <Image
          style={{ zIndex: '1' }}
          src={imagesBanner}
          height={400}
          quality={50}
          priority
          alt=""
        />
      </FullWidth>
      <ScreenWidth1030>
        <Image
          style={{ zIndex: '1' }}
          src={imagesBanner}
          height={350}
          quality={50}
          priority
          alt=""
        />
      </ScreenWidth1030>
      <ScreenWidth880>
        <Image
          style={{ zIndex: '1' }}
          src={imagesBanner}
          height={300}
          quality={50}
          priority
          alt=""
        />
      </ScreenWidth880>
    </>
  )
}
