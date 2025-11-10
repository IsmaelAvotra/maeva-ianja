'use client'

import { useState } from 'react'
import { setLanguage } from '@/app/actions/setLanguage'
import { IoEarthOutline, IoCaretDown } from 'react-icons/io5'

interface Props {
    lang: 'fr' | 'en'
}

export default function LanguageDropdown({ lang }: Props) {
    const [open, setOpen] = useState(false)

    const selectLang = async (value: 'fr' | 'en') => {
        await setLanguage(value)
        window.location.reload()
    }

    return (
        <div className="relative text-white">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-2 tablet:px-3 py-[6px] border border-white/40 rounded hover:bg-white/10 transition"
            >
                <IoEarthOutline className='text-[16px] tablet:text-[24px] desktop:text-[21px]' />
                <span className="text-[12px] tablet:text-[16px] desktop:text-[15px]">{lang.toUpperCase()}</span>
                <IoCaretDown className={`transition-transform className='text-[16px] tablet:text-[24px]' ${open ? 'rotate-180 transition-all' : ''}`} />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-32 bg-blue border border-white/20 rounded shadow-lg text-sm overflow-hidden">
                    <button
                        onClick={() => selectLang('fr')}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 w-full text-left"
                    >
                        🇫🇷 <span>Français</span>
                    </button>

                    <button
                        onClick={() => selectLang('en')}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 w-full text-left"
                    >
                        🇬🇧 <span>English</span>
                    </button>
                </div>
            )}
        </div>
    )
}
