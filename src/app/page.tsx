'use client'

import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Newsletter from '@/components/Newsletter'
import Image from 'next/image'
import { RevealList, RevealWrapper } from  'next-reveal'

export default function Home() {
  return (
    <>
      <main>
        <RevealWrapper delay={150}>
          <Hero />
        </RevealWrapper>
          <section className="flex flex-col py-8 justify-around items-center gap-8 md:flex-row">
            <div className='flex justify-center md:w-1/3'>
              <RevealWrapper delay={150} desktop={false}>
                <div className='relative w-full'>
                  <Image
                    className='rounded-md mx-auto'
                    src="https://framerusercontent.com/images/1ZpSa1mAZcVwMpV9MYrCzNqbE.jpg"
                    alt="World"
                    height={316}
                    width={316}
                  />
                </div>
              </RevealWrapper>
            </div>
              <div className='flex flex-col px-8 justify-center w-full h-full md:w-1/3'>
                <RevealWrapper delay={150}>
                  <h3 className='text-2xl mb-4'>Genesis</h3>
                  <p>
                    Rooted in the exhilarating realm of blockchain technology, Culture DAO 
                    was conceived as a result of a shared desire to harness the power of 
                    community. Our core team, originally part of a cutting-edge project, 
                    brings together the expertise and passion of dedicated professionals 
                    who met in the blockchain world.
                  </p>
                </RevealWrapper>
              </div>
          </section>
          <section className="flex flex-col py-8 justify-around items-center gap-8 md:flex-row">
            <div className='flex justify-center md:w-1/3'>
              <RevealWrapper delay={150}>
                <h3 className='text-xxl'>18</h3>
              </RevealWrapper>
            </div>
            <div className='flex flex-col px-8 justify-center w-full h-full md:w-1/3'>
              <RevealWrapper delay={150} desktop={false}>
                <Image
                  className='mb-4'
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f310.svg"
                  alt="World"
                  height={40}
                  width={43}
                />
                <p>
                  Over the past 18 months, our diverse team members have converged in the
                  blockchain space, igniting an unbreakable drive to innovate.
                </p>
              </RevealWrapper>
            </div>
          </section>
          <section className="flex flex-col py-8 justify-around items-center gap-8 md:flex-row">
            <div className='flex justify-center md:w-1/3'>
              <div className='relative w-full'>
                <RevealWrapper delay={150} desktop={false}>
                  <Image
                    className='rounded-md mx-auto'
                    src="https://framerusercontent.com/images/1ZpSa1mAZcVwMpV9MYrCzNqbE.jpg"
                    alt="World"
                    height={316}
                    width={316}
                  />
                </RevealWrapper>
              </div>
            </div>
            <div className='flex flex-col px-8 justify-center w-full h-full md:w-1/3'>
              <RevealWrapper delay={150}>
                <h3 className='text-2xl mb-4'>A Visionary Workers{'\''} Cooperative</h3>
                <p>
                  Culture DAO champions emotional and financial wellbeing, enabling autonomous 
                  professionals to find immediate employment or partake in our pioneering project 
                  as part of a workers{'\''} cooperative.
                </p>
              </RevealWrapper>
            </div>
          </section>
          <section className="flex flex-col py-8 justify-around items-center gap-8 md:flex-row-reverse">
            <div className='flex justify-center md:w-1/3'>
              <div className='relative w-full'>
                <RevealWrapper delay={150} desktop={false}>
                  <Image
                    className='rounded-md mx-auto'
                    src="https://framerusercontent.com/images/1ZpSa1mAZcVwMpV9MYrCzNqbE.jpg"
                    alt="World"
                    height={316}
                    width={316}
                  />
                </RevealWrapper>
              </div>
            </div>
            <div className='flex flex-col px-8 justify-center w-full h-full md:w-1/3'>
              <RevealWrapper delay={150}>
                <h3 className='text-2xl mb-4'>Embracing Artificial Intelligence</h3>
                <p>
                  Our futuristic bent leads us to explore the potential of AI as our digital persona,
                  representing our project{'\''}s cutting-edge orientation to the digital world.
                </p>
              </RevealWrapper>
            </div>
          </section>
        <RevealWrapper delay={150}>
          <section className='flex flex-col py-48 items-center justify-center'>
            <RevealList interval={60} delay={150} className='relative w-full h-100 grid grid-cols-2 gap-12 px-16 md:grid-cols-4'>
              <div className=''>
                <Image
                  className='rounded-md mx-auto'
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30c.svg"
                  alt="Space"
                  fill
                  priority
                  sizes=''
                />
              </div>
              <div>
                <Image
                  className='rounded-md mx-auto'
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30c.svg"
                  alt="Space"
                  height={80}
                  width={80}
                />
              </div>
              <div>
                <Image
                  className='rounded-md mx-auto'
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30c.svg"
                  alt="Space"
                  height={80}
                  width={80}
                />
              </div>
              <div>
                <Image
                  className='rounded-md mx-auto'
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30c.svg"
                  alt="Space"
                  height={80}
                  width={80}
                />
              </div>
            </RevealList>
          </section>
        </RevealWrapper>
          <section className="flex flex-col items-center justify-center">
            <RevealWrapper delay={150} desktop={false}>
              <h2 className='text-left text-3xl mb-28'>Cultural Intersection</h2>
            </RevealWrapper>
            <div className='flex flex-col justify-around items-center gap-8 md:flex-row'>
              <div className='relative flex justify-center w-full h-full md:w-1/3'>
                <div className='relative w-full'>
                  <RevealWrapper delay={150} desktop={false}>
                    <Image
                      className='rounded-md mx-auto'
                      src="https://framerusercontent.com/images/1ZpSa1mAZcVwMpV9MYrCzNqbE.jpg"
                      alt="World"
                      height={316}
                      width={316}
                    />
                  </RevealWrapper>
                </div>
              </div>
              <div className='flex flex-col px-8 justify-center w-full h-full md:w-1/3'>
                <RevealList interval={60} delay={150}>
                  <h3 className='text-xl mb-4'>Beyond Technology</h3>
                  <p>
                    Culture DAO incorporates elements of Taoism and Balaji{'\''}s concept of a
                    {'\''}network state{'\''}, weaving philosophical depth into our vision.
                  </p>
                  <div className='py-8' />
                  <h3 className='text-xl mb-4'>Collective Creativity</h3>
                  <p>
                    Our ethos of collaboration guides our exploration and development, actively involving
                    every team member in shaping Culture DAO{'\''}s future.
                  </p>
                </RevealList>
              </div>
            </div>
        </section>
        <Journey />
        <Newsletter />
      </main>
    </>
  )
}
