import { ColorHues, extendTheme } from '@chakra-ui/react'

// ***** Legacy colorscheme *****

// The old primaryColor palette will be replaced with a suitable hue out of the Fuchsia TailwindCSS color palette.

const primaryColor: Partial<ColorHues> = {
  '50': '#ffe8ff',
  '100': '#efc2f0',
  '200': '#e09ce3',
  '300': '#d375d7',
  '400': '#c54fca',
  '500': '#ac35b0',
  '600': '#87288a',
  '700': '#601c63',
  '800': '#3b0f3d',
  '900': '#180319',
}

// The old blueColor palette will be replaced with a suitable hue out of the Sky TailwindCSS color palette.

const blueColor: Partial<ColorHues> = {
  '50': '#def8ff',
  '100': '#b8e6f7',
  '200': '#90d4ee',
  '300': '#66c3e5',
  '400': '#3fb2dd',
  '500': '#2898c4',
  '600': '#1a7699',
  '700': '#0c556e',
  '800': '#003445',
  '900': '#00131b',
}

// ***** New colorscheme *****

// The coolGray palette contains all the shades of gray we'll use in the app.
// Example uses: body text, headings, changelog text, page background.
// https://tailwindcss.com/docs/customizing-colors#color-palette-reference

const coolGray: Partial<ColorHues> = {
  '50': '#F9FAFB',
  '100': '#F3F4F6',
  '200': '#E5E7EB',
  '300': '#D1D5DB',
  '400': '#9CA3AF',
  '500': '#6B7280',
  '600': '#4B5563',
  '700': '#374151',
  '800': '#1F2937',
  '900': '#111827',
}

// The Fuchsia palette is our primary accent.
// Example uses: call to action button, primary action button.
// https://tailwindcss.com/docs/customizing-colors#color-palette-reference

const fuchsia: Partial<ColorHues> = {
  '50': '#FDF4FF',
  '100': '#FAE8FF',
  '200': '#F5D0FE',
  '300': '#F0ABFC',
  '400': '#E879F9',
  '500': '#D946EF',
  '600': '#C026D3',
  '700': '#A21CAF',
  '800': '#86198F',
  '900': '#701A75',
}

// The Sky palette is our secondary accent.
// Example uses: secondary button, version badge.
// https://tailwindcss.com/docs/customizing-colors#color-palette-reference

const sky: Partial<ColorHues> = {
  '50': '#F0F9FF',
  '100': '#E0F2FE',
  '200': '#BAE6FD',
  '300': '#7DD3FC',
  '400': '#38BDF8',
  '500': '#0EA5E9',
  '600': '#0284C7',
  '700': '#0369A1',
  '800': '#075985',
  '900': '#0C4A6E',
}

// These are our normal text colors for light and dark modes.
// Do NOT use for text that goes on a colored background.
// Text on colored backgrounds should use a suitable hue from the background color scheme.

const primaryTextLightmode = coolGray['900']
const secondaryTextLightmode = coolGray['700']
const tertiaryTextLightmode = coolGray['600']

const primaryTextDarkmode = coolGray['50']
const secondaryTextDarkmode = coolGray['300']
const tertiaryTextDarkmode = coolGray['400']

// ***** Collect constants, put them in a customTheme *****

const customTheme = extendTheme({
  colors: {
    blue: blueColor,
    primary: primaryColor,
    secondary: blueColor,
    coolGray,
    fuchsia,
    sky,
    primaryTextLightmode,
    secondaryTextLightmode,
    tertiaryTextLightmode,
    primaryTextDarkmode,
    secondaryTextDarkmode,
    tertiaryTextDarkmode,
  },
  fonts: {
    heading: '"Inter", sans-serif;',
    body: '"Inter", sans-serif;',
    mono: '"Roboto Mono", monospace;',
  },
  styles: {
    global: {
      'html, body, #__next': { height: '100%' },
    },
  },
})

export default customTheme
