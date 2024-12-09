import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Service'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
    </div>
  );
}
