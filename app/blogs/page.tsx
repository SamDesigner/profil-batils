import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BlogsPage from '@/components/blogs/BlogsPage'

const page = () => {
  return (
    <div>
        <Nav />
        <BlogsPage />
        <Footer />
    </div>
  )
}

export default page