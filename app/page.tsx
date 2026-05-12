import Nav from '@/components/Nav'
import HomeShowcase  from '@/components/HomeShowcase'
import HotProducts from '@/components/HomeProducts';
import HomeContractors from '@/components/HomeContractors'; 
import HomeAbout from '@/components/HomeAbout';
import HomeChoose from '@/components/HomeChoose';
export default function Home() {
 
  return (
    <div>
      <Nav />
      <HomeShowcase />
      <HotProducts />
      <HomeContractors />
      <HomeAbout />
      <HomeChoose />
    </div>
  );
}
