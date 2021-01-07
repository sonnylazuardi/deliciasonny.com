import React from 'react'
import tw from 'twin.macro'
import toast, { Toaster } from 'react-hot-toast'
import Button from './Button'
import { navigate } from 'gatsby'

const Modal = ({ setShowModal }) => {
  const [pin, setPin] = React.useState('')
  const onSubmit = () => {
    toast.dismiss()
    if (pin === process.env.GATSBY_PIN_CODE) {
      navigate(`/rsvp?pin=${pin}`)
      toast.success('Welcome... Please fill the RSVP form.')
    } else {
      toast.error('Incorrect PIN. Please try again.')
    }
  }
  return (
    <div css={tw`fixed h-screen w-screen left-0 top-0 z-20`}>
      <div
        css={tw`bg-black opacity-50 h-screen w-screen cursor-pointer`}
        onClick={() => setShowModal(false)}
      ></div>
      <div
        css={tw`absolute top-0 left-0 right-0 bottom-0 text-white flex justify-center items-center pointer-events-none`}
      >
        <div
          css={tw`bg-white text-black p-4 sm:p-10 rounded-2xl sm:w-2/6 w-3/4 font-poppin text-center pointer-events-auto`}
        >
          <div css={tw`font-brittany text-5xl mb-8 mt-10 text-gold-900`}>
            Invitation Only
          </div>
          <div css={tw`mb-10 text-sm`}>
            Hi there! Thank you and welcome to Delicia & Sonny's wedding
            website. We are so excited to see you here. Please enter your pin
            below to RSVP for the wedding reception.
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              onSubmit()
            }}
          >
            <input
              css={tw`focus:ring-1 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
              type="text"
              aria-label="Enter PIN"
              placeholder="Enter PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.currentTarget.blur()
                  onSubmit()
                }
              }}
            />
            <Button isPrimary={true}>Submit</Button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Modal
