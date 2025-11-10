import Navbar from './Navbar'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
    const lang = (cookies().get('lang')?.value || 'fr') as 'fr' | 'en'
    return (
        <>
            <Navbar lang={lang} />
            {children}
        </>
    )
}
