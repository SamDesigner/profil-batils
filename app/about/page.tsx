import Nav from "@/components/Nav"
import AboutHero from "@/components/About/AboutHero"
import Footer from '@/components/Footer'
import AboutMission from  '@/components/About/AboutMission'
import AboutStats from '@/components/About/AboutStats'
import AboutProcess from '@/components/About/AboutProcess'
import AboutLeadership from '@/components/About/AboutLeadership'
import FloatingWhatsApp from "@/components/FloatingWhatsapp"
const Page = () => {
  return (
    <div>
        <Nav />
        <AboutHero />
        <AboutMission />
        <AboutStats />
        <AboutProcess />
        <AboutLeadership />
        <Footer />
        <FloatingWhatsApp />
    </div>
  )
}

export default Page