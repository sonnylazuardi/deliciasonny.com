import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Button } from '../components'
import '../styles/global.css'
import GroomsBride from '../images/groomsbride.png'
import { Player } from '@lottiefiles/react-lottie-player'
import Butterfly from '../images/butterfly.json'

const App = () => (
  <Layout css={tw`min-h-screen bg-gold-100 overflow-hidden`}>
    <div tw="main-container mx-auto flex flex-col items-center relative">
      <div tw="p-5 block mt-24">
        <Logo />
      </div>
      <div tw="w-full sm:w-3/5 -mt-8">
        <img src={GroomsBride} />
      </div>
      <div tw="absolute sm:-left-32 sm:h-80 sm:w-80 -bottom-24 -left-24 w-64 h-64 bg-contain bg-gingko z-10" />
      <div tw="absolute sm:-right-20 sm:h-64 sm:w-64 -top-24 -right-24 w-56 h-56 bg-contain transform rotate-180 bg-gingko z-10" />
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
      <div tw="main-container mx-auto items-center pb-12 px-4 sm:px-0">
        <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
          Wedding Schedule
        </div>
        <div tw="grid grid-cols-2 gap-4 text-center font-times text-gold-900 py-20">
          <div tw="col-span-full sm:col-span-1 flex items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12">
            HOLY
            <br />
            MATRIMONY
          </div>
          <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest">
            <div tw="text-lg">SATURDAY</div>
            <div tw="font-bold">20.03.2021</div>
            <div tw="text-lg">16.00 WIB</div>
            <div tw="text-lg mb-4">17.00 SGT</div>
            <div tw="px-12">
              <Button isPrimary={true}>Live Stream</Button>
            </div>
          </div>
        </div>
        <div tw="grid grid-cols-2 gap-4 text-center font-times text-gold-900 py-20">
          <div tw="col-span-full sm:col-span-1 flex items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12">
            WEDDING
            <br />
            RECEPTION
          </div>
          <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest">
            <div tw="font-brittany text-4xl mb-8">Invitation Only</div>
            <div tw="px-12">
              <Button isSecondary={true}>RSVP</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div tw="py-24 bg-gold-100 relative">
      <div tw="main-container mx-auto items-center pb-12 px-4 sm:px-0 relative">
        <div tw="absolute sm:-right-20 sm:h-64 sm:w-64 -top-64 -right-32 w-64 h-64 bg-contain transform rotate-180 bg-gingko z-10" />
        <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-24 mt-12">
          Our Sweet Little Story
        </div>
        <div
          tw="mx-auto w-full p-4 leading-loose font-sans"
          style={{ maxWidth: 640 }}
        >
          <p tw="mb-6">
            Delicia and Sonny started to know each other from Facebook even they
            were in the same university. They first met at a cafe in Central
            Jakarta. While they had a great time getting to know each other
            through the night, it was love at first sight.
          </p>

          <p tw="mb-6">
            As time goes by, they got comfortable with each other, and decided
            to be more than just friends.
          </p>

          <p tw="mb-6">
            1 year of being together in long distance relationship have made
            Delicia & Sonny realized that despite their opposite personalities,
            they truly are the happiest when they’re together.
          </p>

          <p tw="mb-6">At the beginning of 2020, Sonny proposed to Delicia.</p>

          <p tw="mb-6">
            However, the pandemic happened, they decided to get married.{' '}
          </p>
        </div>
      </div>
    </div>
    <div tw="py-24 bg-white relative text-center font-sans">
      © 2020 by{' '}
      <a href="https://sonnylab.com" tw="font-semibold">
        sonnylab
      </a>
    </div>
  </Layout>
)

export default App
