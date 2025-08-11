/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './components/**/*.vue',
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'cstBlack': '#1A1A1A',
        'cstGray': '#667085',
        'cstDarkBlue': '#090D1F',
        'cstPurple': '#6941C6',
        'cstLPurple': '#F9F5FF',
        'cstBlue': '#3538CD',
        'cstLBlue': '#EEF4FF',
        'cstMagenta': '#C11574',
        'cstLMagenta': '#FDF2FA',
        'cstGreen': '#027A48',
        'cstLGreen': '#ECFDF3',
        'cstBlueSmoke': '#363F72',
        'cstLBlueSmoke': '#F8F9FC',
        'cstOrange': '#C4320A',
        'cstLOrange': '#FFF6ED',
        'cstSeaBlue': '#026AA2',
        'cstLSeaBlue': '#F0F9FF'
      },
      screens: {
        'md': '834px'
      }
    },
  },
  plugins: [],
}

