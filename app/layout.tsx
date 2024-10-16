import "@/app/globals.css"
import { Noto_Sans } from 'next/font/google'
export { metadata } from '@/app/metadata'
import { jsonLd } from '@/app/jsonLd';

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-noto'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={`h-full ${noto_sans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
