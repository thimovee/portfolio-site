import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/nav/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thimove | Home',
  description: 'Portfolio to contact me, see my projects and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='scroll-smooth overflow-x-hidden'>
      <body className={cn('text-slate-200 !bg-black w-[100dvw] pr-2', inter.className)}>
        <Navbar />
        <main className='content mt-16 min-h-full '>{children}</main>
      </body>
    </html>
  )
}
