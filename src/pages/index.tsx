import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Button, Link } from '../components'
import GroomsBride from '../images/groomsbride.png'
import QRImage from '../images/qrocbc.png'
import Paynow from '../images/paynow.jpg'
import Googlepay from '../images/googlepay.jpg'
const App = () => {
  const [showGiving, setShowGiving] = React.useState(false)
  return (
    <Layout css={tw`min-h-screen overflow-hidden relative`}>
      <div tw="absolute -top-16 -right-16 w-48 h-48 transform rotate-180 z-10" />
      <div
        className="container"
        tw="mx-auto flex flex-col items-center relative"
      >
        {/*<div tw="p-5 block mt-24">*/}
          {/*<Logo />*/}
        {/*</div>*/}
        <div tw="text-4xl sm:text-5xl text-center mb-24 mt-12" style={{color:"#2a3b72"}}>
          THE WEDDING OF
        </div>
        <div tw="text-3xl sm:text-4xl font-brittany text-center" style={{color:"#2a3b72"}}>
          Fitri Lin
        </div>
        <div tw="" style={{color:"#2a3b72"}}>
          &
        </div>
        <div tw="text-3xl sm:text-4xl font-brittany text-center mb-24 mt-12" style={{color:"#2a3b72"}}>
          Ridh Akbarisanto
        </div>
        <div tw="w-full sm:w-3/5 -mt-8">
          {/*<img src={GroomsBride} />*/}
        </div>

      </div>
      <div tw="py-24 relative bg-white" style={{color:"#2a3b72"}}>
        <div tw="absolute left-0 right-0 h-10" style={{ top: -40 }} />
        <div tw="absolute -top-36 -left-16 w-48 h-48 transform" />
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12" style={{color:"#2a3b72"}}>
            Wedding Schedule
          </div>

          <div tw="text-center">
            Due to the current situation, we opted for an intimate wedding
            ceremony with only immediate family present. Hence, we humbly
            solicit your presence through the link below.
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin py-20">
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
              MINGGU
              <br />
              21
              <br />
              NOV
              <br />
              21
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
              <div tw="text-lg">Akad</div>
              <div tw="text-lg">08.00 WIB</div>
              <br />
              <div tw="text-lg">Intimate Reception</div>
              <div tw="text-lg">10.00 WIB</div>
            </div>
          </div>
          <div tw="grid grid-cols-3 gap-4 text-center font-poppin py-20">
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
            </div>
            <div tw="px-12 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
              <div tw="flex mb-4">
                <Link isPrimary={true} href="https://youtu.be/Ne-r6KDFWH4" style={{backgroundColor:"#2a3b72"}}>
                  Live Stream
                </Link>
              </div>
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
            </div>
          </div>
        </div>
      </div>
      <div tw="py-24 relative">
        <div tw="absolute -top-24 -right-16 w-48 h-48 transform rotate-180" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-24 mt-12" style={{color:"#2a3b72"}}>
            Our Little Story
          </div>
          <div
            tw="mx-auto w-full leading-loose font-sans p-1"
            style={{ maxWidth: 640 }}
          >
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white relative" style={{color:"#2a3b72"}}>
        <div tw="absolute -top-24 -left-16 w-48 h-48 transform" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
          style={{color:"#2a3b72"}}
        >
          <Button isSecondary={true} onClick={() => setShowGiving(!showGiving)} style={{color:"#2a3b72"}}>
            Electronic Giving
          </Button>
          {showGiving ? (
            <>
              <div
                tw="mx-auto w-full p-4 leading-loose font-sans items-center justify-center text-center"
                style={{ maxWidth: 640 }}
              >
                <div tw="">Transfer via BCA</div>
                <div tw="font-bold text-2xl">0342119075</div>
                <div tw="mb-4 font-bold">Fitri Lin</div>
                <img src={QRImage} tw="mx-auto w-80 mb-16 rounded-lg" />

                <div tw="">Transfer via BCA</div>
                <div tw="font-bold text-2xl">2860111236</div>
                <div tw="font-bold mb-16">Ridho Akbarisanto</div>

                <div tw="">Transfer via PayNow</div>
                <div tw="flex items-center justify-center">
                  <img src={Paynow} tw="mx-auto w-80 mb-16 rounded-lg" />
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div tw="py-24 relative text-center font-sans" style={{color:"#2a3b72"}}>
        © 2021 by{' '}
        <a href="https://akbarisanto.com" tw="font-semibold">
          akbarisanto
        </a>
      </div>
    </Layout>
  )
}

export default App
