import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Button, Link } from '../components'
import GroomsBride from '../images/groomsbride.png'
import ShuangXi from '../images/shuangxi.png'
import QRImage from '../images/qrocbc.png'
import QRImage2 from '../images/qrbca2.png'
import Paynow from '../images/paynow.jpg'
import Whatsapp from '../images/whatsapp.png'
import Googlepay from '../images/googlepay.jpg'
import NameTagFitri from '../images/NameTag_Fitri.png'
import NameTag from '../images/NameTag.png'
import NameTagRidho from '../images/NameTag_Ridho.png'
import Journey from '../images/text2.png'
const App = () => {
  const [showGiving, setShowGiving] = React.useState(false)
  return (
    <Layout css={tw`min-h-screen overflow-hidden relative`}>
      <div
        className="container"
        tw="mx-auto flex flex-col items-center relative"
      >
        <div
          tw="font-serif font-bold text-center"
          style={{
            marginTop: '5rem',
            marginBottom: '5rem',
            fontSize: '1rem',
            color: '#2a3b72'
          }}
        >
          THE WEDDING OF
        </div>
        {/*        <div tw="p-5">
          <img src={ShuangXi} />
        </div>
*/}
        <div tw="w-3/5 p-5">
          <img src={NameTagFitri} />
        </div>
        <div
          tw="font-brittany text-center"
          style={{
            fontSize: '4rem',
            color: '#2a3b72'
          }}
        >
          &
        </div>
        <div
          tw="w-full p-5"
          style={{
            marginBottom: '10rem'
          }}
        >
          <img src={NameTagRidho} />
        </div>
      </div>
      <div tw="relative bg-white mx-auto flex flex-col items-center relative">
        <div tw="w-full">
          <img src={GroomsBride} />
        </div>
      </div>
      <div
        tw="py-24 relative"
        style={{
          color: '#2a3b72',
          background: `url('/images/shuangxi.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <div tw="absolute left-0 right-0 h-10" style={{ top: -40 }} />
        <div tw="absolute -top-36 -left-16 w-48 h-48 transform" />
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div
            tw="text-4xl sm:text-5xl text-gold-900 text-center mb-12"
            style={{ color: '#2a3b72' }}
          >
            Jadwal Acara
          </div>

          <div
            tw="text-center"
            style={{
              fontSize: 12
            }}
          >
            Tanpa mengurangi rasa hormat dan untuk dapat menerapkan protokol
            kesehatan secara maksimal, maka kami melakukan pembatasan terhadap
            tamu yang hadir pada acara ini. Oleh karena itu, kami memohon doa
            restu dan mengundang bapak/ibu dan teman-teman sekalian untuk dapat
            menyaksikan prosesi pernikahan kami secara live streaming melalui
            link di bawah ini:
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin py-10">
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest font-bold">
              MINGGU
              <br />
              21
              <br />
              NOV
              <br />
              2021
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
              <div tw="text-lg font-bold">Akad</div>
              <div tw="text-lg">08.00 WIB</div>
              <br />
              <div tw="text-lg font-bold">Intimate Reception</div>
              <div tw="text-lg">10.00 WIB</div>
            </div>
          </div>
          <div tw="grid grid-cols-3 gap-4 text-center font-poppin">
            <div tw="col-span-full sm:col-span-1"></div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
              <div tw="flex">
                <Link
                  isPrimary={true}
                  href="https://www.youtube.com/watch?v=YYgpNmQODnM"
                  style={{ backgroundColor: '#2a3b72' }}
                >
                  Live Stream
                </Link>
              </div>
            </div>
            <div tw="col-span-full sm:col-span-1"></div>
          </div>
        </div>
      </div>
      <div tw="py-24 relative bg-white">
        <div className="container" tw="mx-auto items-center sm:px-0 relative">
          <div
            tw="text-4xl sm:text-5xl text-gold-900 text-center mb-12"
            style={{ color: '#2a3b72' }}
          >
            Our Journey
          </div>
          <div
            tw="mx-auto w-full leading-loose font-sans p-1"
            style={{ maxWidth: 800 }}
          >
            <img src={Journey} tw="w-full" />
          </div>
          {/*          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'left'
            }}>
              7 Maret 2018 - Fitri pertama kali chat terkait riset UX Bukalapak
            </div>
            <div tw="col-span-full sm:col-span-1"></div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="col-span-full sm:col-span-1"></div>
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'right'
            }}>
              5 April 2018 - Pertama kali kenalan langsung, Ridho diinterview Fitri terkait riset UX Bukalapak
            </div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'left'
            }}>
              22 September 2018 - Fitri pertama kali marah ke Ridho
            </div>
            <div tw="col-span-full sm:col-span-1"></div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="col-span-full sm:col-span-1"></div>
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'right'
            }}>
              27 Oktober 2018 - Pertama kali jalan bareng seharian
            </div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'left'
            }}>
              10 Agustus 2019 - Fitri & Ridho memutuskan untuk bersama
            </div>
            <div tw="col-span-full sm:col-span-1"></div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="col-span-full sm:col-span-1"></div>
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'right'
            }}>
              1 Juni 2020 - Fitri & Ridho memutuskan untuk menyudahi hubungan
            </div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'left'
            }}>
              6 Juni 2020 - Fitri & Ridho memutuskan untuk kembali bersama
            </div>
            <div tw="col-span-full sm:col-span-1"></div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="col-span-full sm:col-span-1"></div>
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'right'
            }}>
              17 April 2021 - Pertama kali ke Malang bersama untuk bertemu orang tua Ridho
            </div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'left'
            }}>
               1 Mei 2021 - Pertama kali ke Pekanbaru bersama untuk bertemu orang tua Fitri
            </div>
            <div tw="col-span-full sm:col-span-1"></div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="col-span-full sm:col-span-1"></div>
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'right'
            }}>
              14 November 2021 - Fitri & Ridho menyelenggarakan acara sangjit/lamaran
            </div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'left'
            }}>
              21 November 2021 - Fitri & Ridho menikah
            </div>
            <div tw="col-span-full sm:col-span-1"></div>
          </div>*/}
        </div>
      </div>
      <div tw="py-24 relative" style={{ color: '#2a3b72' }}>
        <div tw="absolute -top-24 -left-16 w-48 h-48 transform" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
          style={{ color: '#2a3b72' }}
        >
          <Button
            isSecondary={true}
            onClick={() => setShowGiving(!showGiving)}
            style={{ color: '#2a3b72' }}
          >
            Ingin Kasih Kado?
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
                <img src={QRImage2} tw="mx-auto w-80 mb-16 rounded-lg" />

                <div tw="">Transfer via BCA</div>
                <div tw="font-bold text-2xl">2860111236</div>
                <div tw="font-bold mb-4">Ridho Akbarisanto</div>
                <img src={QRImage2} tw="mx-auto w-80 mb-16 rounded-lg" />

                <div tw="">Want to contact us instead?</div>
                <div tw="flex items-center justify-center">
                  <Link href="https://wa.me/+6285649904987">
                    <img src={Whatsapp} tw="mx-auto w-80 mb-16 rounded-lg" />
                  </Link>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div
        tw="py-6 relative bg-white text-center font-sans"
        style={{ color: '#2a3b72' }}
      >
        <div tw="w-2/5 pb-6 items-center relative justify-center mx-auto">
          <img src={NameTag} />
        </div>
        <div>
          © 2021 by{' '}
          <a href="https://akbarisanto.com" tw="font-semibold">
            akbarisanto
          </a>
          {' & '}
          <a href="https://sonnylab.com" tw="font-semibold">
            sonnylab
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default App
