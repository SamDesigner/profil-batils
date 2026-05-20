import Nav from "@/components/Nav"
import Footer from '@/components/Footer'
import ResourcesPage from "@/components/resources/ResourcesPage"
import FloatingWhatsApp from "@/components/FloatingWhatsapp"
const page = () => {
  return (
    <div>
        <Nav />
        <ResourcesPage />
        <FloatingWhatsApp />
        <Footer />
    </div>
  )
}

export default page