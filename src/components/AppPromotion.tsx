import Image from "next/image";
import appstore from "@/assets/app-store.svg";
import googleplay from "@/assets/google-play.svg";
import { Scissors, Handshake } from "lucide-react";
import LaminaSvg from "@/assets/navalha.png";

export default function AppPromotion() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gradient-to-l from-black via-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              Agende nosso serviço pelo app Barber
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Baixe agora o app Barber e agende seu horário com facilidade.
              Escolha o serviço, a data e o horário que melhor se adequam à sua
              rotina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=br.com.starapp.appbarbercli&hl=pt_BR&pli=1"
                className="transition-opacity hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={googleplay}
                  alt="Disponível no Google Play"
                  width={135}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </a>
              <a
                href="https://apps.apple.com/br/app/appbarber-cliente/id6450795073"
                className="transition-opacity hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={appstore}
                  alt="Baixar na App Store"
                  width={120}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex flex-col items-center justify-center aspect-square bg-gradient-to-b from-gray-800 to-black rounded-lg transition-transform transform hover:scale-105">
                  <Image
                    src={LaminaSvg}
                    alt="Lâmina de barbear"
                    width={48}
                    height={48}
                    className="mb-4"
                  />
                  <span className="text-white font-bold text-xl">BARBA</span>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex flex-col items-center justify-center aspect-square bg-gradient-to-b from-gray-800 to-black rounded-lg transition-transform transform hover:scale-105">
                  <Scissors className="w-12 h-12 mb-4 text-white" />
                  <span className="text-white font-bold text-xl">CABELO</span>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex flex-col items-center justify-center aspect-square bg-gradient-to-b from-gray-800 to-black rounded-lg transition-transform transform hover:scale-105">
                  <div className="flex items-center gap-2 mb-4">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-bold text-xl text-center">
                    OUTROS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
