import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Studio from '@/components/Studio'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Voices from '@/components/Voices'
import Journal from '@/components/Journal'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Studio />
        <Services />
        <Process />
        <Voices />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
