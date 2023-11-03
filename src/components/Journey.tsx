import Image from 'next/image'
import { RevealList, RevealWrapper } from 'next-reveal'

export default function Journey() {
  return (
      <section className='flex flex-col py-48 items-center justify-center'>
        <RevealWrapper delay={150} desktop={false}>
          <h3 className='uppercase text-2xl text-center mb-24'>Join the Journey</h3>
        </RevealWrapper>
          <RevealList interval={60} delay={150} className='flex w-full md:w-1/3 justify-around px-10 text-center'>
            <div className='relative w-full'>
              <Image
                className='rounded-md mx-auto mb-4'
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f517.svg"
                alt="Space"
                height={42}
                width={42}
              />
              <h4>Culture</h4>
            </div>
            <div className='relative w-full'>
              <Image
                className='rounded-md mx-auto mb-4'
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f4ab.svg"
                alt="Space"
                height={42}
                width={42}
              />
              <h4>DAO</h4>
            </div>
            <div className='relative w-full'>
              <Image
                className='rounded-md mx-auto mb-4'
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f465.svg"
                alt="Space"
                height={42}
                width={42}
              />
              <h4>Community</h4>
            </div>
          </RevealList>
      </section>
  )
}