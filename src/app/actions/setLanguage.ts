'use server'

import { cookies } from 'next/headers'

export async function setLanguage(lang: 'fr' | 'en') {
  cookies().set('lang', lang, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365
  })
}
