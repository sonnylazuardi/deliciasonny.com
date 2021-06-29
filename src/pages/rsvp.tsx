import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Link, Button } from '../components'
import { navigate, Link as GLink } from 'gatsby'

import { useQueryParam, StringParam } from 'use-query-params'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import toast, { Toaster } from 'react-hot-toast'

import { useForm } from 'react-hook-form'
import fetch from 'isomorphic-fetch'

const position = [-8.816462, 115.088558]

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.GATSBY_SUPABASE_HOST,
  process.env.GATSBY_SUPABASE_KEY
)

const Rsvp = () => {
  const [pin, setPin] = useQueryParam('pin', StringParam)
  const [showPerson, setShowPerson] = React.useState(false)
  const [showPlusOne, setShowPlusOne] = React.useState(false)
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {
    let loadingToast = toast.loading('Please wait...')
    if (!data.person) data.person = 0
    supabase
      .from('rsvp')
      .insert([data])
      .then(({ data, error }) => {
        if (!error) {
          if (data[0]) {
            toast.success('Please check your email.', {
              id: loadingToast
            })
          }
          navigate('#schedule')
        } else {
          toast.error(error.message, {
            id: loadingToast
          })
        }
      })
  }

  React.useEffect(() => {
    if (pin !== process.env.GATSBY_PIN_CODE) {
      navigate('/')
    }
  }, [])

  const changeRadio = (event) => {
    const { name, value } = event.target
    if (value === 'false') {
      setShowPerson(false)
      setShowPlusOne(false)
    } else {
      setShowPerson(true)
    }
  }

  return (
    <Layout css={tw`min-h-screen bg-gold-100 overflow-hidden`}>
      <div
        className="container max-w-screen-md"
        tw="mx-auto flex flex-col items-center relative"
      >
        <div tw="p-5 block my-10">
          <GLink to="/">
            <Logo />
          </GLink>
        </div>
      </div>
      <div tw="py-24 bg-gold-100 relative">
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-poppin font-bold text-gold-900 text-center mb-12">
            RSVP
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div tw="font-semibold font-poppin text-sm">
              <div tw="mb-10 ">
                <label>Full Name</label>
                <input
                  name="name"
                  ref={register({ required: true })}
                  css={tw`focus:ring-1 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                  type="text"
                  aria-label="Full Name (Nama Lengkap)"
                  placeholder="Full Name (Nama Lengkap)"
                />
                <div tw="text-xs text-gold-900">
                  {errors.name && 'Your Name is required'}
                </div>
              </div>
              <div tw="mb-10 ">
                <label>Email</label>
                <input
                  name="email"
                  ref={register({ required: true })}
                  css={tw`focus:ring-1 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                  type="email"
                  aria-label="Email"
                  placeholder="Email"
                />
                <div tw="text-xs text-gold-900">
                  {errors.name && 'Your Email is required'}
                </div>
              </div>
              <div tw="mb-10 ">
                <label>WhatsApp Number</label>
                <input
                  name="phone"
                  ref={register({ required: true })}
                  css={tw`focus:ring-1 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                  type="text"
                  aria-label="WhatsApp Number (Nomor WhatsApp)"
                  placeholder="WhatsApp Number (Nomor WhatsApp)"
                />
                <div tw="text-xs text-gold-900">
                  {errors.name && 'Your WhatsApp Number is required'}
                </div>
              </div>
              <div tw="mb-10 flex flex-col">
                <label tw="mb-4">
                  <input
                    type="radio"
                    tw="form-radio"
                    name="attending"
                    value="true"
                    ref={register({ validate: (val) => val != '' })}
                    onChange={(e) => changeRadio(e)}
                  />
                  <span tw="ml-2">Yes, I will attend the wedding</span>
                </label>
                <label tw="mb-4">
                  <input
                    type="radio"
                    tw="form-radio"
                    name="attending"
                    value="false"
                    ref={register({ validate: (val) => val != '' })}
                    onChange={(e) => changeRadio(e)}
                  />
                  <span tw="ml-2">Sorry, I cannot attend the wedding</span>
                </label>
                <div tw="text-xs text-gold-900">
                  {errors.attending && 'Please choose your attendance'}
                </div>
              </div>
              {showPerson ? (
                <div tw="mb-10">
                  <select
                    css={tw`focus:ring-1 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 bg-white rounded-md p-4 mb-4 appearance-none`}
                    name="person"
                    ref={register({ validate: (val) => val != '' })}
                    onChange={(e) => {
                      if (e.target.value === '2') {
                        setShowPlusOne(true)
                      } else {
                        setShowPlusOne(false)
                      }
                    }}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 (With Partner)</option>
                  </select>
                  <div tw="text-xs text-gold-900">
                    {errors.name && 'Please choose number of people'}
                  </div>
                </div>
              ) : null}

              {showPlusOne ? (
                <div tw="mb-10 ">
                  <label>Partner's Full Name</label>
                  <input
                    name="plusone"
                    ref={register({ required: true })}
                    css={tw`focus:ring-1 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                    type="text"
                    aria-label="Partner's Full Name"
                    placeholder="Partner's Full Name"
                  />
                  <div tw="text-xs text-gold-900">
                    {errors.plusone && "Your Partner's Name is required"}
                  </div>
                </div>
              ) : null}

              {showPerson ? (
                <div tw="mb-10 ">
                  <label>Anything that we should know?</label>
                  <input
                    name="info"
                    ref={register({ required: false })}
                    css={tw`focus:ring-1 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                    type="text"
                    aria-label="What should we know"
                    placeholder="E.g: i am allergic to nuts, i will bring a baby, etc"
                  />
                  <div tw="text-xs text-gold-900">
                    {errors.info && 'What should we know is required'}
                  </div>
                </div>
              ) : null}
              <div tw="flex mb-4 items-center justify-center">
                <div tw="py-4">
                  <Button isPrimary={true}>Submit</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div tw="py-24 bg-white relative" id="schedule">
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative text-center"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-20 mt-12">
            Wedding Schedule
          </div>

          <div tw="text-xl sm:text-2xl font-poppin font-bold text-gold-900 text-center mb-12 mt-12">
            Saturday, 20th March 2021
          </div>

          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900">
            <div tw="col-span-full sm:col-span-1 flex items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold font-poppin">
              HOLY
              <br />
              MATRIMONY
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-wide font-poppin justify-center items-center flex">
              <div tw="text-lg mb-4">16.30 WITA - 18.00 WITA</div>
            </div>
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900 py-20">
            <div tw="col-span-full sm:col-span-1 flex items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold font-poppin">
              WEDDING
              <br />
              RECEPTION
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-wide font-poppin justify-center items-center flex">
              <div tw="text-lg mb-4">19.00 WITA</div>
            </div>
          </div>

          <div tw="px-12">
            <div tw="flex">
              <Link
                isSecondary={true}
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=Delicia+%26+Sonny+Wedding&details=Venue%3A+https%3A%2F%2Fgoo.gl%2Fmaps%2FYVzctKQftFVes6ZN6&location=Bali&dates=20210320T083000Z%2F20210320T130000Z"
              >
                Add to Calendar
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div tw="py-24 bg-gold-100 relative">
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative text-center"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-2 mt-12">
            Dress Code
          </div>
          <div tw="text-2xl font-poppin text-gold-900 text-center mb-12 mt-12 font-bold">
            Beach Formal
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900">
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-2xl tracking-widest sm:mb-0 mb-12 font-bold font-poppin">
              Ladies
              <div tw="col-span-full sm:col-span-1 text-2xl tracking-wide font-poppin justify-center items-center flex font-normal">
                Formal Summer Dress
              </div>
            </div>
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-2xl tracking-widest sm:mb-0 mb-12 font-bold font-poppin">
              Men
              <div tw="col-span-full sm:col-span-1 text-2xl tracking-wide font-poppin justify-center items-center flex font-normal">
                Summer Suit / Linen Shirt
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white relative">
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative text-center"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12 mt-12">
            Location
          </div>
          <div tw="font-poppin font-semibold mb-2">Kamaya Bali Wedding</div>
          <div tw="font-poppin mb-4 text-sm">
            Jl. Pantai Suluban, Pecatu, Kuta Sel., Kabupaten Badung, Uluwatu
            <br />
            Bali, Pecatu, Bali 80361, Indonesia
          </div>
          <div tw="flex mb-4 items-center justify-center">
            <div tw="py-4">
              <Link
                isPrimary={true}
                href="https://goo.gl/maps/nbgyi5VCDaChsd7q6"
              >
                Direction
              </Link>
            </div>
          </div>
          <div tw="">
            {typeof window !== 'undefined' && (
              <Map center={position} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                <Marker position={position}>
                  <Popup>Kamaya Bali Wedding</Popup>
                </Marker>
              </Map>
            )}
          </div>
        </div>
      </div>
      <div tw="py-24 bg-gold-100 relative text-center font-sans">
        © 2020 by{' '}
        <a href="https://sonnylab.com" tw="font-semibold">
          sonnylab
        </a>
      </div>
      <Toaster />
    </Layout>
  )
}

export default Rsvp
