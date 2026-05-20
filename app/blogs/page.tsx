import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BlogsPage from '@/components/blogs/BlogsPage'
import FloatingWhatsApp from '@/components/FloatingWhatsapp'  
const page = () => {
  return (
    <div>
        <Nav />
        <BlogsPage />
        <FloatingWhatsApp />
        <Footer />
    </div>
  )
}

export default page