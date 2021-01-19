import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Button, Link } from '../components'
import GroomsBride from '../images/groomsbride.png'
import QRImage from '../images/qrocbc.png'
import { Player } from '@lottiefiles/react-lottie-player'
import Butterfly from '../images/butterfly.json'
import Modal from '../components/Modal'

const App = () => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <Layout css={tw`min-h-screen bg-gold-100 overflow-hidden`}>
      <div
        className="container"
        tw="mx-auto flex flex-col items-center relative"
      >
        <div tw="p-5 block mt-24">
          <Logo />
        </div>
        <div tw="w-full sm:w-3/5 -mt-8">
          <img src={GroomsBride} />
        </div>
        <div tw="absolute sm:-right-10 sm:h-64 sm:w-64 -top-24 -right-24 w-56 h-56 bg-contain transform rotate-180 bg-gingko z-10" />
        <div tw="w-20 h-20 absolute sm:bottom-64 sm:left-10 left-0 bottom-48">
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src={Butterfly}
            style={{ height: '100%', width: '100%' }}
          ></Player>
        </div>
      </div>
      <div tw="py-24 bg-white relative">
        <div tw="absolute left-0 right-0 h-10 bg-white" style={{ top: -40 }} />
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
            Wedding Schedule
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900 py-20">
            <div tw="col-span-full sm:col-span-1 flex items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
              HOLY
              <br />
              MATRIMONY
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
              <div tw="text-lg">SATURDAY</div>
              <div tw="font-bold">20.03.2021</div>
              <div tw="text-lg">17.00 WITA</div>
              <div tw="text-lg mb-4">17.00 SGT</div>
              <div tw="px-12">
                <div tw="flex mb-4">
                  <Link
                    isPrimary={true}
                    href="https://www.youtube.com/channel/UCr7oYUQ44RT52UvtcnewOfw"
                  >
                    Live Stream
                  </Link>
                </div>
                <div tw="flex">
                  <Link
                    isSecondary={true}
                    href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20210320T090000Z%2F20210320T110000Z&text=Delicia%20%26%20Sonny%20Holy%20Matrimony&location=Bali%2C%20Indonesia&details=Holy%20Matrimony%20Live%20Streaming%3A%20https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCr7oYUQ44RT52UvtcnewOfw"
                  >
                    Add to Calendar
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900 py-20">
            <div tw="col-span-full sm:col-span-1 flex items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
              WEDDING
              <br />
              RSVP
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest">
              <div tw="font-brittany text-4xl mb-8">Invitation Only</div>
              <div tw="px-12">
                <Button isSecondary={true} onClick={() => setShowModal(true)}>
                  RSVP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="py-24 bg-gold-100 relative">
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <div tw="absolute sm:-right-20 sm:h-64 sm:w-64 -top-72 -right-20 w-64 h-64 bg-contain transform rotate-180 bg-gingko z-10" />
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-24 mt-12">
            Our Sweet Little Story
          </div>
          <div
            tw="mx-auto w-full p-4 leading-loose font-sans"
            style={{ maxWidth: 640 }}
          >
            <p tw="mb-6">
              Delicia and Sonny started to know each other from Facebook even
              they were in the same university. They first met at a cafe in
              Central Jakarta. While they had a great time getting to know each
              other through the night, it was love at first sight.
            </p>

            <p tw="mb-6">
              As time goes by, they got comfortable with each other, and decided
              to be more than just friends.
            </p>

            <p tw="mb-6">
              1 year of being together in long distance relationship have made
              Delicia & Sonny realized that despite their opposite
              personalities, they truly are the happiest when they’re together.
            </p>

            <p tw="mb-6">
              At the beginning of 2020, Sonny proposed to Delicia.
            </p>

            <p tw="mb-6">
              However, the pandemic happened, they decided to get married.{' '}
            </p>
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white relative">
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <div tw="absolute sm:-right-20 sm:h-64 sm:w-64 -top-72 -right-20 w-64 h-64 bg-contain transform rotate-180 bg-gingko z-10" />
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-24 mt-12">
            Electronic Giving
          </div>
          <div
            tw="mx-auto w-full p-4 leading-loose font-sans items-center justify-center text-center"
            style={{ maxWidth: 640 }}
          >
            <div tw="">Transfer via OCBC QR</div>
            <div tw="font-bold text-2xl">545-810-22349-9</div>
            <div tw="mb-4 font-bold">Delicia Ulyta</div>
            <img src={QRImage} tw="mx-auto w-80 mb-16 rounded-lg" />

            <div tw="">Transfer via BCA</div>
            <div tw="font-bold text-2xl">8090138651</div>
            <div tw="font-bold mb-16">Sonny Lazuardi Hermawan</div>

            <div tw="">Transfer via Paypal</div>
            <div tw="flex items-center justify-center">
              <div tw="p-8">
                <Link
                  isSecondary={true}
                  href="https://www.paypal.me/sonnylazuardi"
                  tw="mb-4 font-bold"
                >
                  Paypal Sonny
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white relative text-center font-sans">
        © 2021 by{' '}
        <a href="https://sonnylab.com" tw="font-semibold">
          sonnylab
        </a>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </Layout>
  )
}

export default App
