import tw, { styled } from 'twin.macro'

const Link = styled.a(({ isPrimary, isSecondary, isSmall }) => [
  // The common button styles added with the tw import
  tw`font-sans font-semibold px-8 py-4 rounded-xl focus:outline-none tracking-normal`,
  tw`transform transition-transform duration-75 w-full`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hover:(scale-105)`,

  // Use props to conditionally style your components
  isPrimary && tw`bg-gold-900 text-white`,

  // Combine regular css with tailwind classes within backticks
  isSecondary && tw`border-2 border-gold-900 text-gold-900`,

  // Conditional props can be added
  isSmall ? tw`text-sm` : tw`text-lg`
])

export default Link
