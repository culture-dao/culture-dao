import Image from 'next/image'

export default function Journey() {
  return (
    <section className='flex flex-col gap-8 justify-center items-center'>
      <h3 className='uppercase text-2xl text-center'>Join the Journey</h3>
      <ul className='flex w-full md:w-1/4 justify-around px-8'>
        <li className='relative'>
          <Image
            className='rounded-md mx-auto mb-4'
            src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f517.svg"
            alt="Space"
            height={42}
            width={42}
          />
          <h4>Culture</h4>
        </li>
        <li className='relative'>
          <Image
            className='rounded-md mx-auto mb-4'
            src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f4ab.svg"
            alt="Space"
            height={42}
            width={42}
          />
          <h4>DAO</h4>
        </li>
        <li className='relative'>
          <Image
            className='rounded-md mx-auto mb-4'
            src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f465.svg"
            alt="Space"
            height={42}
            width={42}
          />
          <h4>Community</h4>
        </li>
      </ul>
    </section>
  )
}