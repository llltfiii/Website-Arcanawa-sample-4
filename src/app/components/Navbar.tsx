import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Logo from "../Assets/logo-arcanawa.jpg";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md bg-[#8b6f47]/70 shadow-lg"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={Logo}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-white text-xl">ARCANAWA</h1>
              <p className="text-white/70 text-xs">INTERIOR-ARSITEK</p>
            </div>
          </Link>

          {/* DESKTOP */}
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <span className={`text-sm ${location.pathname === link.path
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
                  }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* 🔥 MOBILE BUTTON FIX */}
          <button
            className="lg:hidden text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white z-50"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}