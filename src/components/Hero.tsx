"use client"

import { useTheme } from 'next-themes';
import Image from 'next/image'

export default function Hero() {
  const { theme } = useTheme();
  
  const blurImage = `blur-image-${theme == 'light' ? 'light' : 'dark'}`;

  return (
    <div className={`w-full h-screen flex justify-center items-center overflow-hidden relative bg-black ${blurImage}`}>
      <div className='flex justify-center items-center w-full'>
        <Image
          src={`/images/new-hero.webp`}
          alt="Hero Image"
          className="opacity-60 object-cover"
          fill
        />
      </div>
    </div>
  )
}