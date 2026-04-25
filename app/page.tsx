import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Work from '@/components/Work'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
