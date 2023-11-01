import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex h-screen items-center justify-center">
        Section 1
      </div>
      <div className="flex h-screen items-center justify-center">
        Section 2
      </div>
      <div className="flex h-screen items-center justify-center">
        Section 3
      </div>
      <Newsletter />
    </main>
  )
}
