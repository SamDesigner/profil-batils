import Nav from "@/components/Nav"
import AboutHero from "@/components/About/AboutHero"
import Footer from '@/components/Footer'
import AboutMission from  '@/components/About/AboutMission'
import AboutStats from '@/components/About/AboutStats'
import AboutProcess from '@/components/About/AboutProcess'
import AboutLeadership from '@/components/About/AboutLeadership'
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
    </div>
  )
}

export default Page