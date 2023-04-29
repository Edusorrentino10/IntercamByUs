import {
  FullWidth,
  ScreenWidth1030,
  ScreenWidth610,
  ScreenWidth720,
  ScreenWidth800,
  ScreenWidth880,
} from './styles'
import Image from 'next/image'
import Banner2Image from '../../../../assets/Banner2Image.png'

export default function ImageBannerOrcamentoResponsivo() {
  return (
    <>
      <FullWidth>
        <Image src={Banner2Image} height={600} quality={50} alt="" />
      </FullWidth>
      <ScreenWidth1030>
        <Image src={Banner2Image} height={550} quality={50} alt="" />
      </ScreenWidth1030>
      <ScreenWidth880>
        <Image src={Banner2Image} height={450} quality={50} alt="" />
      </ScreenWidth880>
      <ScreenWidth800>
        <Image src={Banner2Image} height={400} quality={50} alt="" />
      </ScreenWidth800>
      <ScreenWidth720>
        <Image src={Banner2Image} height={300} quality={50} alt="" />
      </ScreenWidth720>
      <ScreenWidth610>
        <Image src={Banner2Image} height={250} quality={50} alt="" />
      </ScreenWidth610>
    </>
  )
}
