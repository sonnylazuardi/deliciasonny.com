import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Button, Link } from '../components'
import GroomsBride from '../images/groomsbride.png'
import QRImage from '../images/qrocbc.png'
import Paynow from '../images/paynow.jpg'
import Googlepay from '../images/googlepay.jpg'
import { Player } from '@lottiefiles/react-lottie-player'
import Butterfly from '../images/butterfly.json'
import Modal from '../components/Modal'
const App = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [showGiving, setShowGiving] = React.useState(false)
  return (
    <Layout css={tw`min-h-screen bg-gold-100 overflow-hidden relative`}>
      <div tw="absolute -top-16 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko z-10" />
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

        <div tw="w-20 h-20 absolute ml-40 top-32">
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
        <div tw="absolute -top-36 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
            Wedding Schedule
          </div>

          <div tw="text-center">
            Due to the current situation, we opted for an intimate wedding
            ceremony with only immediate family present. Hence, we humbly
            solicit your presence through the link below.
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900 py-20">
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
              HOLY
              <br />
              MATRIMONY
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
              <div tw="text-lg">SATURDAY</div>
              <div tw="font-bold">20.03.2021</div>
              <div tw="text-lg">15.30 WIB</div>
              <div tw="text-lg mb-4">16.30 SGT</div>
              <div tw="px-12">
                <div tw="flex mb-4">
                  <Link isPrimary={true} href="https://youtu.be/NDTuzo31Hlw">
                    Live Stream
                  </Link>
                </div>
                <div tw="flex">
                  <Link
                    isSecondary={true}
                    href="https://www.google.com/calendar/render?action=TEMPLATE&text=Delicia+%26+Sonny+Wedding&details=Live+Streaming%3A+https%3A%2F%2Fyoutu.be%2FNDTuzo31Hlw&location=Bali&dates=20210320T083000Z%2F20210320T100000Z"
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
      <div tw="py-24 bg-white bg-opacity-30 relative">
        <div tw="absolute -top-24 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-24 mt-12">
            Our Little Story
          </div>
          <div
            tw="mx-auto w-full leading-loose font-sans p-1"
            style={{ maxWidth: 640 }}
          >
            <img src="/images/story.png" tw="w-full" />
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white relative">
        <div tw="absolute -top-24 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <Button isSecondary={true} onClick={() => setShowGiving(!showGiving)}>
            Electronic Giving
          </Button>
          {showGiving ? (
            <>
              <div
                tw="mx-auto w-full p-4 leading-loose font-sans items-center justify-center text-center"
                style={{ maxWidth: 640 }}
              >
                <div tw="">Transfer via OCBC NISP QR</div>
                <div tw="font-bold text-2xl">545-810-22349-9</div>
                <div tw="mb-4 font-bold">Delicia Ulyta</div>
                <img src={QRImage} tw="mx-auto w-80 mb-16 rounded-lg" />

                <div tw="">Transfer via BCA</div>
                <div tw="font-bold text-2xl">8090138651</div>
                <div tw="font-bold mb-16">Sonny Lazuardi Hermawan</div>

                <div tw="">Transfer via PayNow</div>
                <div tw="flex items-center justify-center">
                  <img src={Paynow} tw="mx-auto w-80 mb-16 rounded-lg" />
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div tw="py-24 bg-gold-100 relative text-center font-sans">
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
