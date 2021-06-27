import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout } from '../components'
import { navigate, Link as GLink } from 'gatsby'

import toast, { Toaster } from 'react-hot-toast'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.GATSBY_SUPABASE_HOST,
  process.env.GATSBY_SUPABASE_KEY
)

const Confirm = () => {
  const [guests, setGuests] = React.useState([])
  React.useEffect(() => {
    supabase
      .from('rsvp')
      .select(
        `
        name,
        attending,
        person,
        plusone,
        info
      `
      )
      .then((result) => {
        setGuests(result.data)
      })
  }, [])

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
            Guest List
          </div>

          <div tw="text-center">
            {guests.map((guest, i) => {
              return (
                <div key={i}>
                  {guest.name}, {guest.attending ? '✅' : '❌'}, {guest.person}{' '}
                  orang, {guest.plusone}, {guest.info}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white relative text-center font-sans">
        © 2021 by{' '}
        <a href="https://akbarisanto.com" tw="font-semibold">
          akbarisanto
        </a>
      </div>
      <Toaster />
    </Layout>
  )
}

export default Confirm
