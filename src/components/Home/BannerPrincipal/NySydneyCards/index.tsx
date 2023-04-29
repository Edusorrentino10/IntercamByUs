import {
  FullWidth,
  NewYorkStyles,
  ScreenWidth720,
  SydneyStyles,
} from './styles'
import Image from 'next/image'
import NewYorkImage from '../../../../assets/NewyorkBanner.png'
import SydneyImage from '../../../../assets/SydneyBanner.png'

export default function NewYorkSydneyCardsResponsive() {
  return (
    <>
      <FullWidth>
        <NewYorkStyles>
          <Image src={NewYorkImage} height={100} quality={50} priority alt="" />
        </NewYorkStyles>
        <SydneyStyles>
          <Image src={SydneyImage} height={150} quality={50} priority alt="" />
        </SydneyStyles>
      </FullWidth>
      <ScreenWidth720>
        <NewYorkStyles>
          <Image src={NewYorkImage} height={75} quality={50} priority alt="" />
        </NewYorkStyles>
        <SydneyStyles>
          <Image src={SydneyImage} height={125} quality={50} priority alt="" />
        </SydneyStyles>
      </ScreenWidth720>
    </>
  )
}
