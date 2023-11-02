"use client"

import { useTheme } from 'next-themes'
import Image from 'next/image'

//import { BASE_URL } from '@/config/contants'
const BASE_URL = 'https://kyle-eastcode.github.io/culture-dao'

export default function Hero() {
  const { theme } = useTheme()
  const blurImage = `blur-image-${theme == 'light' ? 'light' : 'dark'}`
  const blurBottom = `blur-bottom-${theme == 'light' ? 'light' : 'dark'}`
  const heroImage = `${BASE_URL}/images/new-hero.webp`

  return (
    <header className='relative flex flex-col justify-center items-center w-full'>
      <div className={blurImage}>
        <Image
          className=''
          src={`${BASE_URL}/images/new-hero.webp`}
          alt="Hero Image"
          loading='eager'
          width={1920}
          height={960}
          fetchPriority='high'
        />
      </div>
      <div className={blurBottom} />
    </header>
  )
}
