import "@/app/globals.css"

import { Noto_Sans } from 'next/font/google'

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-noto'
})

export const metadata = {
  title: 'tloyan',
  description: 'Thomas Loyan Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={`h-full ${noto_sans.variable} antialiased`}>{children}</body>
    </html>
  )
}
