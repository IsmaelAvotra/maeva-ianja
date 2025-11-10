import fr from '../locales/fr'
import en from '../locales/en'

type Lang = 'fr' | 'en'
type TranslationObject = typeof fr

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & string]

export type TranslationKey = NestedKeyOf<TranslationObject>

const languages: Record<Lang, TranslationObject> = { fr, en }

export function t(lang: Lang, key: TranslationKey): string {
  const parts = key.split('.')
  let current: any = languages[lang]

  for (const part of parts) {
    current = current?.[part]
    if (!current) return key
  }

  return current
}
