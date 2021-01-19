import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Link, Button } from '../components'
import { navigate, Link as GLink } from 'gatsby'

import { useQueryParam, StringParam } from 'use-query-params'

import toast, { Toaster } from 'react-hot-toast'

import { useForm } from 'react-hook-form'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.GATSBY_SUPABASE_HOST,
  process.env.GATSBY_SUPABASE_KEY
)

const Confirm = () => {
  const [userId, setUserId] = useQueryParam('userId', StringParam)

  React.useEffect(() => {
    let loadingToast = toast.loading('Please wait...')
    supabase
      .from('rsvp')
      .update({
        confirm: true
      })
      .eq('id', parseInt(userId))
      .then((result) => {
        if (!result.error) {
          toast.success('Your RSVP confirmation has been recorded.', {
            id: loadingToast
          })
        } else {
          console.log(result.error)
          toast.error('Failed to complete RSVP', {
            id: loadingToast
          })
        }
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
            Confirmation
          </div>

          <div tw="text-center">Thanks for completing the RSVP</div>
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

export default Confirm
