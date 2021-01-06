import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Link, Button } from '../components'
import { navigate, Link as GLink } from 'gatsby'

import { useQueryParam, StringParam } from 'use-query-params'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import toast, { Toaster } from 'react-hot-toast'

import { useForm } from 'react-hook-form'

const position = [-8.816462, 115.088558]

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.GATSBY_SUPABASE_HOST,
  process.env.GATSBY_SUPABASE_KEY
)

const Rsvp = () => {
  const [pin, setPin] = useQueryParam('pin', StringParam)
  const [dropdown, setDropdown] = React.useState(false)
  const [person, setPerson] = React.useState(0)
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {
    let loadingToast = toast.loading('Please wait...')
    supabase
      .from('rsvp')
      .insert([{ ...data, person }])
      .then(({ data, error }) => {
        if (!error) {
          toast.success('Your attendance confirmation has been recorded.', {
            id: loadingToast
          })
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

  React.useEffect(() => {
    if (person > 0) {
      setDropdown(false)
    }
  }, [person])

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
      <div tw="py-24 bg-white relative">
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
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
                <div tw="text-xs text-red-400">
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
                <div tw="text-xs text-red-400">
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
                <div tw="text-xs text-red-400">
                  {errors.name && 'Your WhatsApp Number is required'}
                </div>
              </div>
              <div tw="mb-10">
                <div tw="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      tw="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={() => setDropdown((v) => !v)}
                    >
                      {person == 0
                        ? 'Choose number of people coming'
                        : `${person} Person${person > 1 ? 's' : ''}`}
                      <svg
                        tw="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {dropdown ? (
                    <div tw="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        tw="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <a
                          onClick={() => setPerson(1)}
                          tw="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          1 Person
                        </a>
                        <a
                          onClick={() => setPerson(2)}
                          tw="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          2 Persons
                        </a>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div tw="flex mb-4 items-center justify-center">
                <div tw="py-4">
                  <Button isPrimary={true} disabled={person === 0}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div tw="py-24 bg-gold-100 relative">
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative text-center"
        >
          <div tw="absolute sm:-right-20 sm:h-64 sm:w-64 -top-64 -right-32 w-64 h-64 bg-contain transform rotate-180 bg-gingko z-10" />
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
      <div tw="py-24 bg-white relative text-center font-sans">
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
