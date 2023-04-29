import {
  IceUpFullWidth,
  IceUpScreenWidth1030,
  IceUpScreenWidth880,
} from './styles'
import Image from 'next/image'
import IceUp from '../../../../assets/gelosuperior.png'

export default function IceUpResponsive() {
  return (
    <>
      <IceUpFullWidth>
        <Image src={IceUp} height={250} quality={50} priority alt="" />
      </IceUpFullWidth>
      <IceUpScreenWidth1030>
        <Image src={IceUp} height={200} quality={50} priority alt="" />
      </IceUpScreenWidth1030>
      <IceUpScreenWidth880>
        <Image src={IceUp} height={100} quality={50} priority alt="" />
      </IceUpScreenWidth880>
    </>
  )
}
