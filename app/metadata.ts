import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Thomas Loyan',
    description: 'Thomas Loyan | Portfolio',
    generator: 'Next.js',
    applicationName: 'portfolio',
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Next.js',
      'React',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Design',
      'Freelance',
      'Frontend developer',
      'Fullstack developer',
      'Thomas Loyan',
      'Thomas Loyan developer',
      'Thomas Loyan portfolio',
    ],
    authors: [{ name: 'Thomas Loyan', url: 'https://thomasloyan.com' }],
    creator: 'Thomas Loyan',
    publisher: 'Thomas Loyan',
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    openGraph: {
      title: 'Thomas Loyan | Portfolio',
      description: "Thomas Loyan portfolio made with React, Typescript, Nextjs ",
      url: "https://thomasloyan.com",
      siteName: "Thomas Loyan | Portfolio",
      images: [{
        url: "https://thomasloyan.com/tloyan.png",
        width: 3024,
        height: 1890,
        alt: 'Thomas Loyan | Portfolio',
      }],
      type: "website",
    },
    robots: {
      index: true,
      follow: true
    },
    icons: {
      icon: {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
    },
    twitter: {
      card: 'summary',
      title: 'Thomas Loyan | Portfolio',
      description: 'Thomas Loyan portfolio made with React, Typescript, Nextjs ',
      creator: '@thomasloyan',
      images: {
        url: 'https://thomasloyan.com/tloyan.png',
        alt: 'Thomas Loyan | Portfolio',
      },
    }
  }