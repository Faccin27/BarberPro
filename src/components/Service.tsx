import { Scissors, BeakerIcon as Beard, SprayCanIcon as Spray, Coffee } from 'lucide-react'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Corte de Cabelo",
    description: "Cortes modernos e clássicos para todos os estilos."
  },
  {
    icon: <Beard className="w-8 h-8" />,
    title: "Barba",
    description: "Aparos, modelagens e tratamentos para sua barba."
  },
  {
    icon: <Spray className="w-8 h-8" />,
    title: "Tratamentos",
    description: "Hidratação, coloração e outros cuidados capilares."
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Experiência",
    description: "Ambiente acolhedor com café e bebidas cortesia."
  }
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-4 text-yellow-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

