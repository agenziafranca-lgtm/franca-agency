import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Work from '@/components/Work'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Franca.',
  url: 'https://agenziafranca.it',
  description: 'Agenzia di marketing per aziende che vogliono distinguersi davvero. Strategia, contenuti, siti web, ADV e gestione social — pensati su misura, non in serie.',
  email: 'mail@agenziafranca.it',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'mail@agenziafranca.it',
    contactType: 'customer service',
    availableLanguage: 'Italian',
  },
  areaServed: 'IT',
  knowsAbout: [
    'Marketing Strategy',
    'Brand Identity',
    'Performance Marketing',
    'Social Media Management',
    'Content Marketing',
    'Siti Web e E-commerce',
    'SEO',
    'Strategia Editoriale',
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
