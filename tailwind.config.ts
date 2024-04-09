import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1200px',
      extralarge: '1600px',
    },
    colors: {
      black: '#141414',
      blue: '#0C6980',
      white: '#FEFEFE',
      pink: '#F9DAD0',
    },
  },
  plugins: [],
}
export default config
