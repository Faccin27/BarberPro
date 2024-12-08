import Image from 'next/image'
import background from '@/assets/background.jpg'

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center px-4">
      <Image
        src={background}
        alt="Barbershop background"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 bg-black bg-opacity-50 p-6 rounded-lg max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Bem vindo a sua barbearia.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-5">
          Homem também cuida do visual, por que estilo é questão de atitude.
        </p>
        <button className="
          relative inline-flex items-center justify-center
          p-0.5 mb-2 mr-2 overflow-hidden
          text-sm font-medium
          text-gray-900 rounded-lg
          group bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600
          group-hover:from-yellow-400 group-hover:via-yellow-500 group-hover:to-yellow-600
          hover:text-white dark:text-white
          focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800
        ">
          <span className="
            relative px-5 py-2.5 transition-all ease-in duration-75
            bg-white dark:bg-gray-900 rounded-md
            group-hover:bg-opacity-0
          ">
            Reserve já!
          </span>
        </button>
      </div>
    </section>
  )
}

