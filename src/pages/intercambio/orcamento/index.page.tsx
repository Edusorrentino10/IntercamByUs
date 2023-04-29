import { Header } from '@/components/Header'
import {
  OrcamentoContainer,
  BoxAreaContent,
  Box,
  TitleArea,
  ImageBox,
  InfosArea,
  SchoolName,
  FlexAlignItemsArea,
  PriceContent,
  AnimationContent,
  ReturnButton,
} from './styles'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  CalendarBlank,
  Clock,
  GraduationCap,
  MapPin,
} from 'phosphor-react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import Lottie from 'react-lottie'
import animationError from '@/animations/error404Animation.json'
import { LoadingComponent } from '@/components/Loading'
import { ErrorComponent } from '@/components/Error'

const defaultOptionsAnimationError = {
  loop: true,
  autoplay: true,
  animationData: animationError,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

interface CityProps {
  id: string
  img: string
  alt: string
  school: string
  courseName: string
  quantityWeek: string
  hoursWeek: string
  price: string
}

interface DestinationProps {
  boston: CityProps[]
  newyork: CityProps[]
  sydney: CityProps[]
  toronto: CityProps[]
  vancouver: CityProps[]
  dublin: CityProps[]
  londres: CityProps[]
  madrid: CityProps[]
}

export default function OrcamentoCidade() {
  const router = useRouter()
  const [nameDestination, setNameDestination] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [jsonDestionation, setJsonDestionation] = useState<DestinationProps[]>(
    [],
  )

  useEffect(() => {
    async function loadCards() {
      const availableCities = [
        'Boston',
        'New York',
        'Sydney',
        'Toronto',
        'Vancouver',
        'Dublin',
        'Londres',
        'Madrid',
      ]

      const destinationValidated = availableCities.includes(
        String(router.query.destino).charAt(0).toUpperCase() +
        String(router.query.destino).slice(1),
      )
      if (
        !destinationValidated &&
        String(router.query.destino) !== 'undefined'
      ) {
        setIsError(true)
      }

      try {
        setIsLoading(true)
        const response = await api.get('/destinations')
        setIsLoading(false)
        setJsonDestionation(response.data)
      } catch (err) {
        console.log(err)
      }

      const formattedName =
        String(router.query.destino).charAt(0).toUpperCase() +
        String(router.query.destino).slice(1)

      setNameDestination(formattedName)
    }
    loadCards()
  }, [router.query.destino, isError])

  async function handleBackToIntercambio() {
    setTimeout(() => setIsLoading(true), 300)
    await router.push('/intercambio')
    setIsLoading(false)
  }

  return (
    <>
      {!isError && (
        <>
          <OrcamentoContainer>
            <Header />
            <TitleArea>
              <h1>
                <ArrowLeft
                  onClick={handleBackToIntercambio}
                  width={25}
                  height={25}
                  style={{ cursor: 'pointer' }}
                  weight="bold"
                />{' '}
                Cursos disponíveis em {nameDestination}
              </h1>
              <p>
                Listamos aqui todos os cursos disponíveis em {nameDestination}{' '}
                que oferecemos em nossos programas.
              </p>
            </TitleArea>
            <BoxAreaContent>
              {!isLoading &&
                Object.values(jsonDestionation).map((destination) =>
                  Object.values(destination).map((selectedCity, key) =>
                    selectedCity.city.toLowerCase() ===
                      nameDestination.toLowerCase() ? (
                      <Box key={key} onClick={() => router.push('/contato')}>
                        <ImageBox>
                          <Image
                            width={320}
                            height={130}
                            src={selectedCity.img}
                            alt={selectedCity.alt}
                            priority
                            quality={50}
                          />
                        </ImageBox>
                        <InfosArea>
                          <SchoolName>
                            <MapPin size={22} color="#103F79" weight="fill" />
                            <span>{selectedCity.school}</span>
                          </SchoolName>
                          <FlexAlignItemsArea>
                            <GraduationCap
                              size={22}
                              color="#103F79"
                              weight="fill"
                            />
                            <span>{selectedCity.courseName}</span>
                          </FlexAlignItemsArea>
                          <FlexAlignItemsArea>
                            <CalendarBlank
                              size={22}
                              color="#103F79"
                              weight="fill"
                            />
                            <span>{selectedCity.quantityWeek}</span>
                          </FlexAlignItemsArea>
                          <FlexAlignItemsArea>
                            <Clock size={22} color="#103F79" weight="bold" />
                            <span>{selectedCity.hoursWeek}</span>
                          </FlexAlignItemsArea>
                        </InfosArea>
                        <PriceContent>
                          <p>
                            {selectedCity.price} <span>+ taxas</span>
                          </p>
                        </PriceContent>
                      </Box>
                    ) : (
                      ''
                    ),
                  ),
                )}
              {isLoading && <LoadingComponent />}
            </BoxAreaContent>
          </OrcamentoContainer>
          <Footer />
        </>
      )}
      {isError && (
        <>
          <Header />
          <ErrorComponent />
          <Footer />
        </>
      )}
    </>
  )
}
