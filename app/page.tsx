import Nav from '@/components/Nav'
import HomeShowcase  from '@/components/HomeShowcase'
import HotProducts from '@/components/HomeProducts';
import HomeContractors from '@/components/HomeContractors'; 
import HomeAbout from '@/components/HomeAbout';
import HomeChoose from '@/components/HomeChoose';
import HomeFeatured from '@/components/HomeFeatured';
import HomeTestimonials from '@/components/HomeTestimonials';
import HomePartnership from '@/components/HomePartnership';
import Footer from '@/components/Footer';
export default function Home() {
 
  return (
    <div>
      <Nav />
      <HomeShowcase />
      <HotProducts />
      <HomeContractors />
      <HomeAbout />
      <HomeChoose />
      <HomeFeatured />
      <HomeTestimonials />
      <HomePartnership />
      <Footer /> 
    </div>
  );
}
