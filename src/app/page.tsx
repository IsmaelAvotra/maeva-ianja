import { cookies } from 'next/headers'
import Banner from './components/Banner'

export default function Home() {
  const lang = (cookies().get('lang')?.value || 'fr') as 'fr' | 'en'

  return <Banner lang={lang} />
}
