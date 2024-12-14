"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    setMounted(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/20 dark:bg-black/60 backdrop-blur-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Andre Barber
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-500 transition duration-300"
          >
            Sobre
          </a>
          <a
            href="#service"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-500 transition duration-300"
          >
            Serviços
          </a>
          <a
            href="#app"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-500 transition duration-300"
          >
            Aplicativo
          </a>
          <a
            href="#local"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-500 transition duration-300"
          >
            Localização
          </a>
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </div>
    </header>
  );
}
