'use client'
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme); // Apply saved theme
    } else {
      // If no preference, check system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(systemPrefersDark ? "dark" : "light"); // Set theme based on system
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    setMounted(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); // Change theme
    localStorage.setItem("theme", newTheme); // Save preference in localStorage
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!mounted) {
    return null; // Prevent rendering before component mounts
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/50 dark:bg-black/60 backdrop-blur-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-2xl font-bold ${scrolled ? "text-zinc-800" : "text-slate-300"} dark:text-white`}>
          Andre Barber
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a
            href="#about"
            className={`${scrolled ? "text-zinc-800" : "text-slate-300" } dark:text-gray-200 hover:text-yellow-500 transition duration-300`}
          >
            Sobre
          </a>
          <a
            href="#service"
            className={`${scrolled ? "text-zinc-800" : "text-slate-300" } dark:text-gray-200 hover:text-yellow-500 transition duration-300`}
          >
            Serviços
          </a>
          <a
            href="#app"
            className={`${scrolled ? "text-zinc-800" : "text-slate-300" } dark:text-gray-200 hover:text-yellow-500 transition duration-300`}
          >
            Aplicativo
          </a>
          <a
            href="#local"
            className={`${scrolled ? "text-zinc-800" : "text-slate-300" } dark:text-gray-200 hover:text-yellow-500 transition duration-300`}
          >
            Localização
          </a>
        </nav>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-zinc-800 dark:text-white"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-zinc-800 dark:text-white mr-2"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full bg-gray-200 dark:bg-zinc-800 dark:text-white"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-black z-40 pt-20">
          <nav className="flex flex-col items-center gap-6">
            <a
              href="#about"
              onClick={toggleMobileMenu}
              className="text-xl text-zinc-800 dark:text-gray-200 hover:text-yellow-500 transition duration-300"
            >
              Sobre
            </a>
            <a
              href="#service"
              onClick={toggleMobileMenu}
              className="text-xl text-zinc-800 dark:text-gray-200 hover:text-yellow-500 transition duration-300"
            >
              Serviços
            </a>
            <a
              href="#app"
              onClick={toggleMobileMenu}
              className="text-xl text-zinc-800 dark:text-gray-200 hover:text-yellow-500 transition duration-300"
            >
              Aplicativo
            </a>
            <a
              href="#local"
              onClick={toggleMobileMenu}
              className="text-xl text-zinc-800 dark:text-gray-200 hover:text-yellow-500 transition duration-300"
            >
              Localização
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}