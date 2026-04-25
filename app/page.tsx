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
  url: 'https://franca-agency.vercel.app',
  description: 'Trasformiamo aziende in brand di cui innamorarsi. Non facciamo compitini — costruiamo Brand.',
  email: 'mail@agenziafranca.it',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'mail@agenziafranca.it',
    contactType: 'customer service',
    availableLanguage: 'Italian',
  },
  areaServed: 'IT',
  knowsAbout: [
    'Brand Strategy',
    'Social Media Management',
    'Performance Marketing',
    'Content Marketing',
    'Web Design',
    'Identità di Brand',
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
