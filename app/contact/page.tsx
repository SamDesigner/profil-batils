import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactPage from '@/components/contact/ContactPage'
import FloatingWhatsApp from '@/components/FloatingWhatsapp'
const page = () => {
  return (
    <div>
      <Nav />
      <ContactPage />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default page