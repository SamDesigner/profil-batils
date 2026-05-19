import Nav from "@/components/Nav"
import Footer from '@/components/Footer'
import ResourcesPage from "@/components/resources/ResourcesPage"
const page = () => {
  return (
    <div>
        <Nav />
        <ResourcesPage />
        <Footer />
    </div>
  )
}

export default page