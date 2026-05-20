import React from 'react'
import Nav from '@/components/Nav'
import PageContent from '@/components/products/PageContent'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsapp'
const page = () => {
  return (
    <div>
      <Nav />
      <PageContent />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default page