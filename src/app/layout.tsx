import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './layouts/navbar/Navbar'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maeva Ianja Estelle portfolio',
  description:
    'Passionate about investment and entrepreneurship, Maeva Ianja Estelle is an aspiring Capital Investment Analyst with a strong foundation in Finance. Explore her dedication and expertise to see how she can contribute to your projects.',
  keywords: [
    'investment',
    'entrepreneurship',
    'finance',
    'capital investment',
    'analyst',
  ],
  metadataBase: new URL('https://maeva-ianja-portfolio.vercel.app/'),
  openGraph: {
    title: 'Maeva ianja portfolio',
    images: ['https://maeva-ianja-portfolio.vercel.app/share.jpeg'],
  },
  authors: {
    url: 'https://ismael-avotra.vercel.app/',
    name: 'Avotrasoa Ismael',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://maeva-ianja-portfolio.vercel.app/share.jpeg'],
  },
  other: {
    google: 'notranslate',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={` bg-blue text-white ${workSans.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
