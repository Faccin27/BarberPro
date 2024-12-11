import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Service'
import About from '@/components/About';
import LocationMap from '@/components/LocationMap';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <LocationMap />
    </div>
  );
}
