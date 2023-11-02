import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section className="flex h-screen items-center justify-center">
          Section 1
        </section>
        <section className="flex h-screen items-center justify-center">
          Section 2
        </section>
        <section className="flex h-screen items-center justify-center">
          Section 3
        </section>
        <Newsletter />
      </main>
    </>
  )
}
