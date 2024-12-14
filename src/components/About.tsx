import Image from 'next/image'
import { Facebook, Instagram, Twitter, PhoneIcon as WhatsApp, TwitterIcon as TikTok } from 'lucide-react'
import barber from '@/assets/barber.jpg'

export default function About() {
  return (
    <section id='about' className="py-16 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left half - Title and Description */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className=" font-playfair italic text-3xl font-bold mb-12 text-gray-800 dark:text-white text-center ">
              Andre Barber
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Na Andre Barber, acreditamos que cada corte de cabelo é uma obra de arte. 
              Com anos de experiência e paixão pelo que fazemos, oferecemos serviços de 
              alta qualidade em um ambiente acolhedor e moderno. Nossa missão é ajudar 
              cada cliente a expressar sua personalidade única através de estilos 
              impecáveis e cuidados personalizados.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Venha nos visitar e descubra por que somos a escolha preferida dos 
              homens que valorizam estilo, qualidade e atenção aos detalhes.
            </p>
          </div>
          
          {/* Right half - Photo and Social Icons */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="relative w-64 h-64 mb-6">
              <Image
                src={barber}
                alt="Andre, o barbeiro"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl border border-1 border-yellow-300 hover:border-yellow-400 hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-yellow-500 hover:scale-105 transition-all duration-300 dark:text-gray-300 dark:hover:text-yellow-400">
                <WhatsApp size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500 hover:scale-105 transition-all duration-300 dark:text-gray-300 dark:hover:text-yellow-400">
                <TikTok size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400 hover:scale-105 transition-all duration-300  dark:text-gray-300 dark:hover:text-yellow-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

