import { Person, WithContext, WebPage } from "schema-dts"

const person: Person = {
  "@type": "Person",
  "name": "Thomas Loyan",
  "url": "https://thomasloyan.com",
  "jobTitle": "Frontend Developer",
  "sameAs": [
    "https://github.com/tloyan",
  ]
}

export const jsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Thomas Loyan | Frontend Developer",
  "description": "Thomas Loyan's personal portfolio showcasing frontend development projects and challenges with technologies like Next.js, React, Tailwind CSS.",
  "url": "https://thomasloyan.com/",
  "creator": person,
  "publisher": person,
  "mainEntity": {
    "@type": "WebPage",
    "name": "Thomas Loyan Portfolio",
    "description": "Portfolio of Thomas Loyan, Frontend Developer specializing in Next.js, React, and modern web technologies.",
    "image": "https://thomasloyan.com/preview.jpg", // Aperçu du portfolio
    "author": person,
    "inLanguage": "en",
    "keywords": [
      "Frontend developer",
      "Next.js developer",
      "React developer",
      "JavaScript developer",
      "Thomas Loyan",
      "Loyan",
      "Thomas Loyan portfolio",
      "Thomas Loyan developer",
      "Tailwind CSS",
      "Web development",
      "Freelance developer",
      "Frontend Mentor challenges",
      "Responsive design",
      "Fullstack developer"
    ]
  }
}