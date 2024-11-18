import "@/app/globals.css"
import { Oswald, Syne, Space_Grotesk } from 'next/font/google'
export { metadata } from '@/app/metadata'
import { jsonLd } from '@/app/jsonLd';

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-oswald"
})

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-space-grotesk"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={`h-full ${oswald.variable} ${space_grotesk.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
