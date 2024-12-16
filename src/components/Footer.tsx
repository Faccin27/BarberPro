"use client";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-900 text-white py-6 mt-24">
      {/* Botão de subir ao topo */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-full"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={18} />
      </button>

      {/* Texto de créditos */}
      <div className="text-center text-sm">
        Site criado e desenvolvido por{" "} 
        <a href="https://faccindev.pro" target="_blank" className="cursor-pointer">
        <span className="font-semibold text-purple-500 underline">Guilherme Faccin </span></a>
      </div>
    </footer>
  );
};

export default Footer;
