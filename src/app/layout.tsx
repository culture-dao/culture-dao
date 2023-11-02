import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BottomNav from '@/components/BottomNav'
import { ThemeProvider } from '@/components/ThemeProvider'
import Footer from '@/components/Footer'
import { SLOGAN, TITLE } from '@/config/contants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${TITLE} | ${SLOGAN}`,
  description: SLOGAN,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <div className='relative min-h-screen w-full overflow-visible'>
            {children}
            <BottomNav />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
