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
      'Loyan',
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
        url: "https://thomasloyan.com/preview.jpg",
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
        url: '/icon.svg',
        sizes: '29x28',
        type: 'image/svg'
      },
    },
    twitter: {
      card: 'summary',
      title: 'Thomas Loyan | Portfolio',
      description: 'Thomas Loyan portfolio made with React, Typescript, Nextjs ',
      creator: '@thomasloyan',
      images: {
        url: 'https://thomasloyan.com/preview.jpg',
        alt: 'Thomas Loyan | Portfolio',
      },
    }
  }